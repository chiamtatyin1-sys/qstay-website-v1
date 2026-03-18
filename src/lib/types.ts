export interface Project {
  id?: number;
  title: string;
  description: string;
  location: string;
  image_url: string;
  created_at?: string;
}

export interface Pricing {
  id?: number;
  service_type: string;
  price: number;
}

export interface Admin {
  id?: number;
  password_hash: string;
}
