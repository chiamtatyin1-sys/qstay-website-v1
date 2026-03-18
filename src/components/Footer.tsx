import { Building2, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="h-8 w-8 text-primary-400" />
              <span className="font-bold text-xl">QSTAY</span>
            </div>
            <p className="text-slate-400 text-sm">
              TCM Construction & Contract Services<br />
              Your trusted Quantity Surveying partner since 2004
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-slate-400 hover:text-white text-sm">
                Home
              </Link>
              <Link to="/projects" className="text-slate-400 hover:text-white text-sm">
                Projects
              </Link>
              <Link to="/pricing" className="text-slate-400 hover:text-white text-sm">
                Pricing
              </Link>
              <Link to="/contact" className="text-slate-400 hover:text-white text-sm">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="flex flex-col space-y-2 text-sm text-slate-400">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>tcm20@yahoo.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+6012-7162575</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Johor, Malaysia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
          <p>© {new Date().getFullYear()} QSTAY.com.my. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
