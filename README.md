# QSTAY Website

Professional Quantity Surveying services website built with React, Vite, and deployed on Vercel.

## Features

- Public pages: Home, Projects, Pricing, Contact
- Admin dashboard with password protection
- Add/Edit/Delete projects
- Update service pricing
- Image upload support (requires configuration)

## Setup Instructions

### 1. Create Neon Database

1. Go to [Neon](https://neon.tech) and create a free account
2. Create a new project
3. Copy your connection string (DATABASE_URL)

### 2. Create GitHub Repository

1. Create a new GitHub repo named `qstay-website`
2. Push this code to your repo

### 3. Deploy to Vercel

1. Go to [Vercel](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your GitHub repo
4. Add the following Environment Variables:

   | Name | Value |
   |------|-------|
   | `DATABASE_URL` | Your Neon database connection string |
   | `ADMIN_PASSWORD_HASH` | bcrypt hash of your admin password |
   | `JWT_SECRET` | Any random string for session tokens |

### 4. Generate Password Hash

Run this command to generate a bcrypt hash:

```bash
node -e "const bcrypt = require('bcryptjs'); bcrypt.hash('your-password', 10).then(hash => console.log(hash))"
```

Replace `your-password` with your desired admin password.

### 5. Initialize Database

Run these SQL commands in your Neon dashboard:

```sql
-- Projects table
CREATE TABLE IF NOT EXISTS projects (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  location VARCHAR(255),
  image_url TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Pricing table
CREATE TABLE IF NOT EXISTS pricing (
  id SERIAL PRIMARY KEY,
  service_type VARCHAR(100) NOT NULL,
  price INTEGER DEFAULT 0
);

-- Insert initial pricing data
INSERT INTO pricing (service_type, price) VALUES
  ('Bungalow House', 0),
  ('Terrace House', 0),
  ('Factory', 0),
  ('School (up to 4 storey)', 0),
  ('Other small building', 0),
  ('Earthwork (4+ acre)', 0);
```

## Image Upload

The current upload feature returns a placeholder URL. To enable actual image uploads:

### Option 1: Vercel Blob (Recommended)

1. Go to Vercel Dashboard > Storage
2. Create a Vercel Blob store
3. Update the `/api/upload.ts` file to use `@vercel/blob`

### Option 2: Use Image URLs

For now, you can paste image URLs from any public image hosting service (ImgBB, Cloudinary, etc.)

## Development

```bash
npm install
npm run dev
```

## Tech Stack

- React 18
- Vite 5
- TailwindCSS 3
- React Router 6
- Vercel Serverless Functions
- Neon PostgreSQL

## License

Private - All rights reserved
