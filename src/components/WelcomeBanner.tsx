import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

export function WelcomeBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-8 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h3 className="font-semibold text-blue-900 flex items-center gap-2">
            Welcome to multiuserdungeon.com! 👋
          </h3>
          <p className="text-blue-700 text-sm">
            The place to discover and explore the best MUD games.{' '}
            <Link to="/about" className="text-blue-600 hover:text-blue-800 underline">
              Learn more
            </Link>
          </p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-blue-400 hover:text-blue-600 transition-colors p-1 hover:bg-blue-100 rounded"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}