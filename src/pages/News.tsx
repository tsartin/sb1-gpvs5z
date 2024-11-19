import React, { useState } from 'react';
import { ArrowLeft, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { posts, Post } from '../data/posts';

const categoryColors = {
  interview: 'bg-purple-100 text-purple-800',
  announcement: 'bg-blue-100 text-blue-800',
  guide: 'bg-green-100 text-green-800',
  review: 'bg-orange-100 text-orange-800'
};

export function News() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Post['category'] | 'all'>('all');

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-indigo-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/" className="text-indigo-100 hover:text-white flex items-center gap-2 mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to directory
          </Link>
          <h1 className="text-4xl font-bold mb-4">MUD News & Updates</h1>
          <p className="text-indigo-100">
            Interviews, announcements, and updates from the MUD community
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 -mt-8">
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-grow relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {['all', 'interview', 'announcement', 'guide', 'review'].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category as typeof selectedCategory)}
                  className={`px-4 py-2 rounded-lg border transition-colors ${
                    selectedCategory === category
                      ? 'bg-indigo-50 border-indigo-200 text-indigo-700'
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 mb-8">
          {filteredPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[post.category]}`}>
                    {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                  </span>
                  {post.mudName && (
                    <span className="text-sm text-gray-500">
                      {post.mudName}
                    </span>
                  )}
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}