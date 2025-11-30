import { LucideIcon } from 'lucide-react';

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
}

export interface Client {
  id: number;
  name: string;
}
