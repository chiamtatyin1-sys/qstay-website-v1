import { Link } from 'react-router-dom';
import { 
  Calculator, 
  Clock, 
  Award, 
  TrendingUp, 
  CheckCircle, 
  Building2,
  Users,
  FileCheck
} from 'lucide-react';

const services = [
  {
    icon: Calculator,
    title: 'Accurate Quantity Takeoff',
    description: 'New building, extension work, earthwork using computer programs based on Prismoidal, Coordinate area, and Section area methods.',
  },
  {
    icon: TrendingUp,
    title: 'Market Rate Comparison',
    description: 'Get market rates for new buildings, extension work, and earthwork to ensure competitive pricing.',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'Receive your Bill of Quantity within 3 days instead of the standard 2-week tender period.',
  },
  {
    icon: Award,
    title: '20+ Years Experience',
    description: 'Professional QS services with 12 years of computer program expertise and 120+ tenders per year.',
  },
];

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
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                TCM Construction & Contract Services
              </h1>
              <p className="text-xl text-primary-100 mb-8">
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
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
                <Building2 className="h-24 w-24 mx-auto text-white/80" />
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
              Your Trusted QS Partner
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
            <p className="text-slate-600">
              Comprehensive Quantity Surveying solutions for your construction needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <service.icon className="h-12 w-12 text-primary-600 mb-4" />
                <h3 className="font-semibold text-lg text-slate-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Why Choose Us?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-primary-50 p-6 rounded-xl">
                <h3 className="font-bold text-xl text-primary-800 mb-4">{item.title}</h3>
                <ul className="space-y-2">
                  {item.points.map((point, pIndex) => (
                    <li key={pIndex} className="flex items-start text-slate-700 text-sm">
                      <CheckCircle className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
          <Link
            to="/contact"
            className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
}
