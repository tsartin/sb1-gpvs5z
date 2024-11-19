import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

export function NewsletterBanner() {
  return (
    <div className="bg-blue-50 border border-blue-100 rounded-md shadow-sm p-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <Mail className="w-4 h-4 text-blue-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-blue-900">Stay Updated</p>
            <p className="text-sm text-blue-700">Get the latest MUD updates in your inbox</p>
          </div>
        </div>
        <Link
          to="/newsletter"
          className="shrink-0 text-sm font-medium px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Subscribe
        </Link>
      </div>
    </div>
  );
}