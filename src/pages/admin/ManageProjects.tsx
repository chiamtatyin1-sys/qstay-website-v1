import { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, X, Loader2, Image as ImageIcon } from 'lucide-react';
import type { Project } from '../../lib/types';

export default function ManageProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    image_url: '',
  });
  const [saving, setSaving] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const token = localStorage.getItem('adminToken');
      const url = editingProject 
        ? `/api/projects?id=${editingProject.id}` 
        : '/api/projects';
      
      const res = await fetch(url, {
        method: editingProject ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        fetchProjects();
        setShowModal(false);
        resetForm();
      } else {
        const data = await res.json();
        alert(data.message || 'Failed to save project');
      }
    } catch (error) {
      alert('Failed to save project');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this project?')) return;

    try {
      const token = localStorage.getItem('adminToken');
      const res = await fetch(`/api/projects?id=${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (res.ok) {
        fetchProjects();
      } else {
        alert('Failed to delete project');
      }
    } catch (error) {
      alert('Failed to delete project');
    }
  };

  const openEditModal = (project: Project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      description: project.description,
      location: project.location,
      image_url: project.image_url,
    });
    setShowModal(true);
  };

  const resetForm = () => {
    setEditingProject(null);
    setFormData({ title: '', description: '', location: '', image_url: '' });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formDataUpload = new FormData();
    formDataUpload.append('file', file);

    try {
      const token = localStorage.getItem('adminToken');
      const res = await fetch('/api/upload', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formDataUpload,
      });

      if (res.ok) {
        const data = await res.json();
        setFormData((prev) => ({ ...prev, image_url: data.url }));
        alert('Image uploaded successfully!');
      } else {
        alert('Failed to upload image');
      }
    } catch (error) {
      alert('Failed to upload image');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <Loader2 className="h-8 w-8 text-primary-600 animate-spin" />
      </div>
    );
  }

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800">Manage Projects</h1>
          <button
            onClick={() => {
              resetForm();
              setShowModal(true);
            }}
            className="flex items-center bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700"
          >
            <Plus className="h-5 w-5 mr-2" />
            Add Project
          </button>
        </div>

        {projects.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <p className="text-slate-500">No projects yet. Add your first project!</p>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Image</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Location</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {projects.map((project) => (
                  <tr key={project.id} className="hover:bg-slate-50">
                    <td className="px-6 py-4">
                      {project.image_url ? (
                        <img
                          src={project.image_url}
                          alt={project.title}
                          className="h-12 w-16 object-cover rounded"
                        />
                      ) : (
                        <div className="h-12 w-16 bg-slate-200 rounded flex items-center justify-center">
                          <ImageIcon className="h-4 w-4 text-slate-400" />
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 font-medium text-slate-800">{project.title}</td>
                    <td className="px-6 py-4 text-slate-600">{project.location}</td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => openEditModal(project)}
                        className="text-primary-600 hover:text-primary-800 mr-4"
                      >
                        <Edit2 className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(project.id!)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-slate-800">
                  {editingProject ? 'Edit Project' : 'Add New Project'}
                </h2>
                <button onClick={() => setShowModal(false)}>
                  <X className="h-6 w-6 text-slate-400" />
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Title
                    </label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Location
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Description
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Image URL
                    </label>
                    <input
                      type="url"
                      value={formData.image_url}
                      onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                      placeholder="https://..."
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    />
                    <p className="text-xs text-slate-500 mt-1">
                      Or upload an image below
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Upload Image
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                    />
                  </div>

                  {formData.image_url && (
                    <div>
                      <img
                        src={formData.image_url}
                        alt="Preview"
                        className="h-32 w-full object-cover rounded-lg"
                      />
                    </div>
                  )}
                </div>

                <div className="flex justify-end space-x-4 mt-6">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 text-slate-600 hover:text-slate-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 disabled:opacity-50"
                  >
                    {saving ? 'Saving...' : 'Save'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
