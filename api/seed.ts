import type { VercelRequest, VercelResponse } from '@vercel/node';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL || '');

const projects = [
  {
    title: 'Taman Perindustrian Murni, Senai',
    description: 'Industrial project at Taman Perindustrian Murni, Senai.',
    location: 'Senai, Johor',
    image_url: '/images/Hkfoto2-1.gif'
  },
  {
    title: 'Terbrau Industries Estate 11, Johor Bahru',
    description: 'Industrial development at Terbrau Industries Estate 11.',
    location: 'Johor Bahru, Johor',
    image_url: '/images/Hkfoto3-1.gif'
  },
  {
    title: 'Taman Bahagia, Tampoi',
    description: 'Commercial and residential project at Taman Bahagia, Tampoi.',
    location: 'Tampoi, Johor',
    image_url: '/images/Hkfoto4-1.gif'
  },
  {
    title: 'Terbrau Industries Estate 4, Johor Bahru',
    description: 'Industrial project at Terbrau Industries Estate 4.',
    location: 'Johor Bahru, Johor',
    image_url: '/images/Hkfoto5-1.gif'
  },
  {
    title: 'Plentong Industries Estate, Johor Bahru',
    description: 'Industrial development at Plentong Industries Estate.',
    location: 'Johor Bahru, Johor',
    image_url: '/images/Hkfoto6-1.gif'
  },
  {
    title: 'Plentong Industries Estate (2), Johor Bahru',
    description: 'Additional industrial project at Plentong Industries Estate.',
    location: 'Johor Bahru, Johor',
    image_url: '/images/Hkfoto7-1.gif'
  },
  {
    title: 'Jalan Sugai Tiram, Johor',
    description: 'Commercial development at Jalan Sugai Tiram.',
    location: 'Johor',
    image_url: '/images/Hkfoto8-1.gif'
  },
  {
    title: 'Jalan Kangkar Tebrau, Johor Bahru',
    description: 'Project at Jalan Kangkar Tebrau.',
    location: 'Johor Bahru, Johor',
    image_url: '/images/Hkfoto9-1.gif'
  },
  {
    title: 'Kawasan Perindustrian Estate 4',
    description: 'Industrial development at kawasan perindustrian estate 4.',
    location: 'Johor',
    image_url: '/images/Hkfoto91-1.gif'
  },
  {
    title: 'Pasir Gudang Industrial Estate',
    description: 'Industrial project at Pasir Gudang Industrial Estate.',
    location: 'Pasir Gudang, Johor',
    image_url: '/images/Hkfoto92-1.gif'
  },
  {
    title: 'Pasir Gudang Industrial Estate (2)',
    description: 'Additional industrial development at Pasir Gudang.',
    location: 'Pasir Gudang, Johor',
    image_url: '/images/Hkfoto93-1.gif'
  },
  {
    title: 'Senai Industries 1, Senai',
    description: 'Industrial development at Senai Industries 1.',
    location: 'Senai, Johor',
    image_url: '/images/Hkfoto94-1.gif'
  },
  {
    title: 'Jalan Tampoi, Johor Bahru',
    description: 'Project at Jalan Tampoi.',
    location: 'Johor Bahru, Johor',
    image_url: '/images/Hkfoto95-1.gif'
  },
  {
    title: 'Jalan Wong Ah Fook',
    description: 'Commercial project at Jalan Wong Ah Fook.',
    location: 'Johor Bahru, Johor',
    image_url: '/images/Hkfoto96-1.gif'
  },
  {
    title: '4 Storey Shoplots at Ulu Tiram',
    description: '4 storey commercial shophouses development.',
    location: 'Ulu Tiram, Johor',
    image_url: '/images/Hkfoto97-1.gif'
  },
  {
    title: 'Johor Bahru Development',
    description: 'Various projects in Johor Bahru area.',
    location: 'Johor Bahru, Johor',
    image_url: '/images/Hkfoto98-1.gif'
  },
  {
    title: 'Jalan Resak, Johor',
    description: 'Project at Jalan Resak.',
    location: 'Johor',
    image_url: '/images/Hkfoto99-1.gif'
  },
  {
    title: 'Pangsapuri Fasa 6B at Baru Uda',
    description: 'Apartment project Phase 6B at Baru Uda.',
    location: 'Johor',
    image_url: '/images/lytp1a.gif'
  },
  {
    title: 'Taman Mutiara, Pontian',
    description: 'Development at Taman Mutiara, Lot 56552771 & 56552772.',
    location: 'Pontian, Johor',
    image_url: '/images/lytp3a.gif'
  },
  {
    title: '152 Units Single Storey Terrace House, Seri Alam',
    description: '152 units single storey terrace house with children playground.',
    location: 'Seri Alam, Johor',
    image_url: '/images/lytp4a.gif'
  },
  {
    title: '3 Units Double Storey Terrace Show House, Bandar Seri Alam',
    description: 'Proposed 3 units of double storey terrace show house.',
    location: 'Bandar Seri Alam, Johor',
    image_url: '/images/lytp6a.gif'
  },
  {
    title: '4 Units Town House Show Houses, Bandar Seri Alam',
    description: '4 units show houses for town house development.',
    location: 'Bandar Seri Alam, Johor',
    image_url: '/images/lytp7a.gif'
  },
  {
    title: '30 Unit Rumah Berkembar, Bandar Baru Kota Putri',
    description: '30 unit rumah berkembar jenis SDH006.',
    location: 'Bandar Baru Kota Putri, Johor',
    image_url: '/images/lytp8a.gif'
  },
  {
    title: '219 Units Double Storey Terrace House, Bandar Seri Alam',
    description: 'Proposed 219 units double storey terrace house Type Ixora 1.',
    location: 'Bandar Seri Alam, Johor',
    image_url: '/images/lytp9a.gif'
  },
  {
    title: '120 Units Double Storey Terrace Houses, Bandar Bistari Perdana',
    description: 'Proposed 120 units double storey terrace houses Type Ixora II(B).',
    location: 'Bandar Bistari Perdana, Johor',
    image_url: '/images/lytp10a.gif'
  },
  {
    title: '2 Blocks Apartment, Kota Putri',
    description: '2 block apartment (12 storey, 450 units) at Kota Putri.',
    location: 'Kota Putri, Johor',
    image_url: '/images/lytp2a.gif'
  },
];

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { secret } = req.query;

  if (secret !== process.env.SEED_SECRET) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    // Check if projects already exist
    const existing = await sql`SELECT COUNT(*) as count FROM projects`;
    if (existing[0] && Number(existing[0].count) > 0) {
      return res.status(400).json({ message: 'Projects already seeded' });
    }

    // Insert projects
    for (const project of projects) {
      await sql`
        INSERT INTO projects (title, description, location, image_url)
        VALUES (${project.title}, ${project.description}, ${project.location}, ${project.image_url})
      `;
    }

    return res.status(200).json({ 
      message: 'Projects seeded successfully',
      count: projects.length 
    });
  } catch (error) {
    console.error('Seed error:', error);
    return res.status(500).json({ message: 'Seed failed', error: String(error) });
  }
}
