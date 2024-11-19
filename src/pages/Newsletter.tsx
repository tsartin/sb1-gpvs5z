import React, { useState } from 'react';
import { Mail, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/" className="text-indigo-600 hover:text-indigo-800 flex items-center gap-2 mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to directory
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          {!subscribed ? (
            <>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-indigo-600" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900">Newsletter Signup</h1>
              </div>

              <p className="text-gray-600 mb-8 text-lg">
                Stay updated with the latest MUD games, community highlights, and exclusive content delivered straight to your inbox.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="privacy"
                    required
                    className="mt-1 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="privacy" className="ml-2 block text-sm text-gray-600">
                    I agree to receive emails and accept the privacy policy
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Subscribe to Newsletter
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="bg-indigo-100 p-4 rounded-full inline-flex mb-6">
                <Mail className="w-8 h-8 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank you for subscribing!</h2>
              <p className="text-gray-600">
                We've sent a confirmation email to {email}.<br />
                Please check your inbox to complete the subscription.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}