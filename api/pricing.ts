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
  const isMutating = req.method === 'PUT';

  if (isMutating && !token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    switch (req.method) {
      case 'GET': {
        const pricing = await sql`
          SELECT * FROM pricing ORDER BY id
        `;
        return res.status(200).json(pricing);
      }

      case 'PUT': {
        const { id, price } = req.body;

        if (!id || price === undefined) {
          return res.status(400).json({ message: 'ID and price are required' });
        }

        const result = await sql`
          UPDATE pricing 
          SET price = ${parseInt(price)}
          WHERE id = ${id}
          RETURNING *
        `;

        if (result.length === 0) {
          return res.status(404).json({ message: 'Pricing item not found' });
        }

        return res.status(200).json(result[0]);
      }

      default:
        return res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Pricing API error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
