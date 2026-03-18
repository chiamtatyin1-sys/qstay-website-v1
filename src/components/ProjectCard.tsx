import { MapPin } from 'lucide-react';
import type { Project } from '../lib/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video bg-slate-200">
        {project.image_url ? (
          <img
            src={project.image_url}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-400">
            No Image
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-slate-800 mb-2">
          {project.title}
        </h3>
        {project.location && (
          <div className="flex items-center text-slate-500 text-sm">
            <MapPin className="h-4 w-4 mr-1" />
            {project.location}
          </div>
        )}
        {project.description && (
          <p className="mt-2 text-slate-600 text-sm line-clamp-2">
            {project.description}
          </p>
        )}
      </div>
    </div>
  );
}
