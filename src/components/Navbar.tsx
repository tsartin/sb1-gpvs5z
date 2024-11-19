import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown, Newspaper, Mail, Gamepad2, FileText, Search, Sword } from 'lucide-react';
import { categories } from '../data/categories';

export function Navbar() {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isNewsOpen, setIsNewsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const categoryDropdownRef = useRef<HTMLDivElement>(null);
  const newsDropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(event.target as Node)) {
        setIsCategoryOpen(false);
      }
      if (newsDropdownRef.current && !newsDropdownRef.current.contains(event.target as Node)) {
        setIsNewsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCategorySelect = (category: string) => {
    navigate(`/category/${category.toLowerCase()}`);
    setIsCategoryOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <Sword className="w-8 h-8 text-indigo-600" />
              <span className="font-bold text-gray-900">MUD Directory</span>
            </Link>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search games..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative" ref={newsDropdownRef}>
              <button
                onClick={() => setIsNewsOpen(!isNewsOpen)}
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-indigo-600 focus:outline-none"
              >
                <Newspaper className="w-5 h-5" />
                News
                <ChevronDown className="w-4 h-4" />
              </button>

              {isNewsOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                  <div className="py-1">
                    <Link
                      to="/newsletter"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                      onClick={() => setIsNewsOpen(false)}
                    >
                      <Mail className="w-4 h-4" />
                      Newsletter
                    </Link>
                    <Link
                      to="/news"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                      onClick={() => setIsNewsOpen(false)}
                    >
                      <Newspaper className="w-4 h-4" />
                      Latest News
                    </Link>
                    <Link
                      to="/changelog"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                      onClick={() => setIsNewsOpen(false)}
                    >
                      <FileText className="w-4 h-4" />
                      Changelog
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="relative" ref={categoryDropdownRef}>
              <button
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-indigo-600 focus:outline-none"
              >
                <Gamepad2 className="w-5 h-5" />
                Genres
                <ChevronDown className="w-4 h-4" />
              </button>

              {isCategoryOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                  <div className="py-1">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => handleCategorySelect(category)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}