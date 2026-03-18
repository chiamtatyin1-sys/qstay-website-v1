import type { VercelRequest, VercelResponse } from '@vercel/node';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL || '');

function getAuthToken(req: VercelRequest): string | null {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    return authHeader.substring(7);
  }
  return null;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const token = getAuthToken(req);
  const isMutating = req.method === 'POST' || req.method === 'PUT' || req.method === 'DELETE';

  if (isMutating && !token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    switch (req.method) {
      case 'GET': {
        const projects = await sql`
          SELECT * FROM projects ORDER BY created_at DESC
        `;
        return res.status(200).json(projects);
      }

      case 'POST': {
        const { title, description, location, image_url } = req.body;

        if (!title) {
          return res.status(400).json({ message: 'Title is required' });
        }

        const result = await sql`
          INSERT INTO projects (title, description, location, image_url)
          VALUES (${title}, ${description || ''}, ${location || ''}, ${image_url || ''})
          RETURNING *
        `;

        return res.status(201).json(result[0]);
      }

      case 'PUT': {
        const { id, title, description, location, image_url } = req.body;

        if (!id) {
          return res.status(400).json({ message: 'Project ID is required' });
        }

        const result = await sql`
          UPDATE projects 
          SET title = COALESCE(${title}, title),
              description = COALESCE(${description}, description),
              location = COALESCE(${location}, location),
              image_url = COALESCE(${image_url}, image_url)
          WHERE id = ${id}
          RETURNING *
        `;

        if (result.length === 0) {
          return res.status(404).json({ message: 'Project not found' });
        }

        return res.status(200).json(result[0]);
      }

      case 'DELETE': {
        const { id } = req.query;

        if (!id || typeof id !== 'string') {
          return res.status(400).json({ message: 'Project ID is required' });
        }

        await sql`DELETE FROM projects WHERE id = ${parseInt(id)}`;
        return res.status(200).json({ message: 'Project deleted' });
      }

      default:
        return res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Projects API error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
