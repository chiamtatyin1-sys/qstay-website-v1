import { useState, useEffect } from 'react';
import { Loader2, Save } from 'lucide-react';
import type { Pricing } from '../../lib/types';

export default function ManagePricing() {
  const [pricing, setPricing] = useState<Pricing[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

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

  const handlePriceChange = (id: number, price: string) => {
    const numPrice = parseInt(price) || 0;
    setPricing((prev) =>
      prev.map((item) => (item.id === id ? { ...item, price: numPrice } : item))
    );
  };

  const handleSave = async () => {
    setSaving(true);
    setMessage('');

    try {
      const token = localStorage.getItem('adminToken');
      
      for (const item of pricing) {
        const res = await fetch('/api/pricing', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify({ id: item.id, price: item.price }),
        });

        if (!res.ok) {
          throw new Error('Failed to save pricing');
        }
      }

      setMessage('Pricing updated successfully!');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('Failed to save pricing');
    } finally {
      setSaving(false);
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
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800">Manage Pricing</h1>
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 disabled:opacity-50"
          >
            {saving ? (
              <Loader2 className="h-5 w-5 mr-2 animate-spin" />
            ) : (
              <Save className="h-5 w-5 mr-2" />
            )}
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>

        {message && (
          <div className={`p-4 rounded-lg mb-6 ${message.includes('success') ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
            {message}
          </div>
        )}

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-slate-50 px-6 py-4 border-b">
            <h2 className="font-semibold text-slate-800">Service Pricing (RM)</h2>
          </div>
          <div className="divide-y">
            {pricing.map((item) => (
              <div key={item.id} className="px-6 py-4 flex items-center justify-between">
                <label className="font-medium text-slate-800">
                  {item.service_type}
                </label>
                <div className="flex items-center">
                  <span className="text-slate-500 mr-2">RM</span>
                  <input
                    type="number"
                    min="0"
                    value={item.price}
                    onChange={(e) => handlePriceChange(item.id!, e.target.value)}
                    className="w-32 px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 text-right font-semibold"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 bg-blue-50 p-4 rounded-lg">
          <p className="text-blue-800 text-sm">
            <strong>Tip:</strong> Set prices to 0 initially if you want to hide pricing from public page.
            Prices will display as "Contact for quote" when set to 0.
          </p>
        </div>
      </div>
    </div>
  );
}
