import { Link } from 'react-router-dom';
import { 
  Calculator, 
  TrendingUp, 
  CheckCircle, 
  Building2,
  Users,
  FileCheck,
  Mail,
  Phone
} from 'lucide-react';

const BASE_URL = '';

const whyChooseUs = [
  {
    title: 'Save Cost',
    points: [
      'No need to employ a QS on long-term basis',
      'Charges range from RM300 to RM3,000 per project',
      'Estimate before work starts to avoid variation orders',
    ],
  },
  {
    title: 'Save Time',
    points: [
      '3 days turnaround vs 2 weeks standard',
      'Your time is more valuable - spend it on productive tasks',
    ],
  },
  {
    title: 'Third Party Opinion',
    points: [
      'Get a safe second opinion',
      'Small investment for major peace of mind',
    ],
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4 mb-6 inline-block">
                <img 
                  src={`${BASE_URL}/images/logo.jpg`} 
                  alt="QSTAY Logo" 
                  className="h-20 object-contain"
                />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                TCM Construction & Contract Services
              </h1>
              <p className="text-xl text-primary-100 mb-6">
                Professional Quantity Surveying services for House Owners, Factory Owners, 
                Land Owners, Developers, Contractors, and Subcontractors.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
                >
                  Get a Quote
                </Link>
                <Link
                  to="/projects"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Projects
                </Link>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
                <Building2 className="h-24 w-24 text-white/80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Your Trusted QS Partner Since 2004
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              With over 20 years of experience in Quantity Surveying, we provide accurate 
              building estimates and cost planning using advanced computer programs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-slate-50 rounded-xl">
              <Users className="h-10 w-10 mx-auto text-primary-600 mb-3" />
              <div className="text-3xl font-bold text-slate-800">20+</div>
              <div className="text-slate-500 text-sm">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-xl">
              <FileCheck className="h-10 w-10 mx-auto text-primary-600 mb-3" />
              <div className="text-3xl font-bold text-slate-800">120+</div>
              <div className="text-slate-500 text-sm">Tenders/Year</div>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-xl">
              <Calculator className="h-10 w-10 mx-auto text-primary-600 mb-3" />
              <div className="text-3xl font-bold text-slate-800">12+</div>
              <div className="text-slate-500 text-sm">Years Computer Programs</div>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-xl">
              <CheckCircle className="h-10 w-10 mx-auto text-primary-600 mb-3" />
              <div className="text-3xl font-bold text-slate-800">100%</div>
              <div className="text-slate-500 text-sm">Accuracy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Services</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Calculator className="h-12 w-12 text-primary-600 mb-4" />
              <h3 className="font-bold text-xl text-slate-800 mb-2">Accurate Quantity</h3>
              <ul className="text-slate-600 text-sm space-y-1">
                <li>• New building/factory</li>
                <li>• Extension work to building/factory</li>
                <li>• Earthwork using computer program based on:</li>
                <li className="ml-4">- Prismoidal method</li>
                <li className="ml-4">- Coordinate area method</li>
                <li className="ml-4">- Section area method</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <TrendingUp className="h-12 w-12 text-primary-600 mb-4" />
              <h3 className="font-bold text-xl text-slate-800 mb-2">Market Rate Comparison</h3>
              <ul className="text-slate-600 text-sm space-y-1">
                <li>• New building</li>
                <li>• Extension work to building</li>
                <li>• Earthwork</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Why Choose Us?</h2>
              <div className="space-y-6">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="bg-primary-50 p-4 rounded-xl">
                    <h3 className="font-bold text-lg text-primary-800 mb-2">{item.title}</h3>
                    <ul className="space-y-1">
                      {item.points.map((point, pIndex) => (
                        <li key={pIndex} className="flex items-start text-slate-700 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="bg-slate-100 p-6 rounded-xl">
                <img 
                  src={`${BASE_URL}/images/lpipm.jpg`} 
                  alt="LPIPM Member" 
                  className="mx-auto max-h-48 object-contain mb-4"
                />
                <p className="text-sm text-slate-600">CIDB Malaysia Member</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-800">My Certificates</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white p-4 rounded-xl shadow-md text-center">
              <img 
                src={`${BASE_URL}/images/cer.jpg`} 
                alt="Certificate in Technology (Building)" 
                className="mx-auto max-h-48 object-contain"
              />
              <p className="mt-2 text-sm font-medium text-slate-700">
                Certificate in Technology (Building)
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md text-center">
              <img 
                src={`${BASE_URL}/images/cer2.jpg`} 
                alt="Microsoft Excel Certificate" 
                className="mx-auto max-h-48 object-contain"
              />
              <p className="mt-2 text-sm font-medium text-slate-700">
                Certificate of Attendance for Microsoft Excel
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Previous Projects Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">My Previous Projects</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[
              'fc.jpg', 'kulai.jpg', 'bbu.jpg', 'school.jpg', 'sabah.jpg',
              'cch.jpg', 'schoolc.jpg', 'port.jpg', 'orkid.jpg', 'melaka.jpg'
            ].map((img, index) => (
              <div key={index} className="aspect-square bg-slate-100 rounded-lg overflow-hidden">
                <img 
                  src={`${BASE_URL}/images/${img}`} 
                  alt="Project" 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/projects"
              className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a professional Quantity Surveying quote. 
            Fast turnaround, accurate estimates, and competitive pricing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:tcm20@yahoo.com"
              className="flex items-center bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              <Mail className="h-5 w-5 mr-2" />
              tcm20@yahoo.com
            </a>
            <a
              href="tel:+60127162575"
              className="flex items-center bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              +6012-7162575
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
