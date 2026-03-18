import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Building2 } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-primary-600" />
            <span className="font-bold text-xl text-slate-800">QSTAY</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary-600'
                    : 'text-slate-600 hover:text-primary-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/login"
              className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
            >
              Admin
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2 text-sm font-medium ${
                  location.pathname === link.path
                    ? 'text-primary-600'
                    : 'text-slate-600'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/login"
              className="block py-2 text-sm font-medium text-primary-600"
              onClick={() => setIsOpen(false)}
            >
              Admin Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
