import { useState, useEffect } from 'react';
import { DollarSign, Loader2 } from 'lucide-react';
import type { Pricing } from '../lib/types';

export default function PricingPage() {
  const [pricing, setPricing] = useState<Pricing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPricing();
  }, []);

  const fetchPricing = async () => {
    try {
      const res = await fetch('/api/pricing');
      const data = await res.json();
      setPricing(data);
    } catch (error) {
      console.error('Error fetching pricing:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Our Pricing</h1>
          <p className="text-slate-600">
            Competitive rates for professional Quantity Surveying services. 
            Contact us for a personalized quote based on your project requirements.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="h-8 w-8 text-primary-600 animate-spin" />
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-primary-600 text-white px-6 py-4">
              <h2 className="text-xl font-semibold">Service Charges</h2>
            </div>
            <div className="divide-y">
              {pricing.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center px-6 py-4 hover:bg-slate-50"
                >
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 text-primary-600 mr-3" />
                    <span className="font-medium text-slate-800">
                      {item.service_type}
                    </span>
                  </div>
                  <div className="text-lg font-bold text-primary-600">
                    {item.price > 0 ? `RM ${item.price.toLocaleString()}` : 'Contact for Quote'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8 text-center">
          <p className="text-slate-600 text-sm">
            * Prices are starting rates. Final pricing depends on project scope and complexity.
          </p>
          <a
            href="mailto:tcm20@yahoo.com?subject=Quote Request"
            className="inline-block mt-4 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </div>
  );
}
