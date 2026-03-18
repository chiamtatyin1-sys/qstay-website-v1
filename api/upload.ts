import type { VercelRequest, VercelResponse } from '@vercel/node';

function getAuthToken(req: VercelRequest): string | null {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    return authHeader.substring(7);
  }
  return null;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const token = getAuthToken(req);
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const formData = req.body;
    
    // For demo purposes, we'll store images as base64 in a simple way
    // In production, you should use Vercel Blob or S3
    const file = formData.get('file');
    
    if (!file) {
      return res.status(400).json({ message: 'No file provided' });
    }

    // For this demo, we'll return a placeholder URL
    // In production, implement actual file upload to Vercel Blob or S3
    const mockUrl = `https://example.com/uploads/${Date.now()}-${file.name}`;
    
    return res.status(200).json({ 
      url: mockUrl,
      message: 'Image upload requires Vercel Blob or S3 configuration. See README for setup instructions.'
    });
  } catch (error) {
    console.error('Upload error:', error);
    return res.status(500).json({ message: 'Upload failed' });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
