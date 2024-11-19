import React from 'react';
import { ArrowLeft, Star, Wrench, Bug, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { changelog } from '../data/changelog';

const typeIcons = {
  feature: <Star className="w-5 h-5 text-purple-500" />,
  improvement: <RefreshCw className="w-5 h-5 text-blue-500" />,
  fix: <Bug className="w-5 h-5 text-red-500" />,
  update: <Wrench className="w-5 h-5 text-green-500" />
};

const typeColors = {
  feature: 'bg-purple-100 text-purple-800',
  improvement: 'bg-blue-100 text-blue-800',
  fix: 'bg-red-100 text-red-800',
  update: 'bg-green-100 text-green-800'
};

export function Changelog() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-indigo-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/" className="text-indigo-100 hover:text-white flex items-center gap-2 mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to directory
          </Link>
          <h1 className="text-4xl font-bold mb-4">Changelog</h1>
          <p className="text-indigo-100">
            Track the latest updates and improvements to the MUD Directory
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          {changelog.map((entry) => (
            <div key={entry.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  {typeIcons[entry.type]}
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{entry.title}</h2>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-sm text-gray-500">{entry.date}</span>
                      <span className={`text-sm px-2 py-1 rounded-full ${typeColors[entry.type]}`}>
                        {entry.type.charAt(0).toUpperCase() + entry.type.slice(1)}
                      </span>
                      <span className="text-sm font-medium text-gray-600">{entry.id}</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{entry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}