import { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import type { Project } from '../lib/types';
import { Loader2 } from 'lucide-react';

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await fetch('/api/projects');
      const data = await res.json();
      setProjects(data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Our Projects</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Explore our portfolio of completed Quantity Surveying projects across 
            residential, commercial, and industrial developments in Malaysia.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="h-8 w-8 text-primary-600 animate-spin" />
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-slate-500">No projects available yet.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
