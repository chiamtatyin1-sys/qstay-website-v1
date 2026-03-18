import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Contact Us</h1>
          <p className="text-slate-600">
            Get in touch with us for your Quantity Surveying needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Get in Touch
            </h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-slate-800">Email</h3>
                  <a
                    href="mailto:tcm20@yahoo.com"
                    className="text-primary-600 hover:underline"
                  >
                    tcm20@yahoo.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-slate-800">Phone</h3>
                  <a
                    href="tel:+60127162575"
                    className="text-primary-600 hover:underline"
                  >
                    +6012-7162575
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-slate-800">Location</h3>
                  <p className="text-slate-600">Johor, Malaysia</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-slate-800">Response Time</h3>
                  <p className="text-slate-600">We typically respond within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Quick Inquiry
            </h2>
            <p className="text-slate-600 mb-6">
              Send us an email with your project details and we'll get back to you shortly.
            </p>
            <a
              href="mailto:tcm20@yahoo.com?subject=Project Inquiry"
              className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              <Mail className="h-5 w-5 mr-2" />
              Send Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
