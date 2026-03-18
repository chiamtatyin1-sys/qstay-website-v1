import type { VercelRequest, VercelResponse } from '@vercel/node';
import bcrypt from 'bcryptjs';

const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH || '';
const JWT_SECRET = process.env.JWT_SECRET || 'qstay-secret-key';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ message: 'Password is required' });
  }

  try {
    if (!ADMIN_PASSWORD_HASH) {
      return res.status(500).json({ message: 'Admin password not configured' });
    }

    const isValid = await bcrypt.compare(password, ADMIN_PASSWORD_HASH);

    if (!isValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    const token = Buffer.from(`${password}:${Date.now()}`).toString('base64');

    return res.status(200).json({ token });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
