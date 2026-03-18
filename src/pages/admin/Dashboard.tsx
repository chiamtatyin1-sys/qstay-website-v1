import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FolderOpen, 
  DollarSign, 
  LogOut, 
  Loader2 
} from 'lucide-react';

interface Stats {
  projects: number;
  pricing: number;
}

export default function Dashboard() {
  const [stats, setStats] = useState<Stats>({ projects: 0, pricing: 0 });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/login');
      return;
    }

    fetchStats();
  }, [navigate]);

  const fetchStats = async () => {
    try {
      const [projectsRes, pricingRes] = await Promise.all([
        fetch('/api/projects'),
        fetch('/api/pricing'),
      ]);

      const projects = await projectsRes.json();
      const pricing = await pricingRes.json();

      setStats({
        projects: Array.isArray(projects) ? projects.length : 0,
        pricing: Array.isArray(pricing) ? pricing.length : 0,
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/login');
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
          <h1 className="text-3xl font-bold text-slate-800">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="flex items-center text-slate-600 hover:text-red-600"
          >
            <LogOut className="h-5 w-5 mr-2" />
            Logout
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            to="/admin/projects"
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="bg-primary-100 p-4 rounded-lg">
                <FolderOpen className="h-8 w-8 text-primary-600" />
              </div>
              <span className="text-3xl font-bold text-slate-800">
                {stats.projects}
              </span>
            </div>
            <h2 className="text-xl font-semibold text-slate-800">Manage Projects</h2>
            <p className="text-slate-500 text-sm mt-1">
              Add, edit, or delete project entries
            </p>
          </Link>

          <Link
            to="/admin/pricing"
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="bg-secondary-100 p-4 rounded-lg">
                <DollarSign className="h-8 w-8 text-secondary-600" />
              </div>
              <span className="text-3xl font-bold text-slate-800">
                {stats.pricing}
              </span>
            </div>
            <h2 className="text-xl font-semibold text-slate-800">Manage Pricing</h2>
            <p className="text-slate-500 text-sm mt-1">
              Update service pricing
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
