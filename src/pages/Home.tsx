import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { games, newGames } from '../data/games';
import { posts } from '../data/posts';
import { GameCard } from '../components/GameCard';
import { NewsletterBanner } from '../components/NewsletterBanner';
import { WelcomeBanner } from '../components/WelcomeBanner';
import { Link } from 'react-router-dom';

export function Home() {
  const [showAllMuds, setShowAllMuds] = useState(false);

  const filterAndSortGames = (gameList: typeof games) =>
    gameList.sort((a, b) => b.votes - a.votes);

  const filteredGames = filterAndSortGames(games);
  const filteredNewGames = filterAndSortGames(newGames);
  const displayedGames = showAllMuds ? filteredGames : filteredGames.slice(0, 20);
  const latestNews = posts.slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 pt-8">
        <WelcomeBanner />

        <div className="flex gap-8">
          <div className="flex-grow max-w-4xl">
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Top Ranked MUDs</h2>
              <div className="space-y-2">
                {displayedGames.slice(0, 5).map((game, index) => (
                  <GameCard key={game.id} game={game} rank={index + 1} />
                ))}
              </div>

              <div className="my-6">
                <NewsletterBanner />
              </div>

              <div className="space-y-2">
                {displayedGames.slice(5).map((game, index) => (
                  <GameCard key={game.id} game={game} rank={index + 6} />
                ))}
              </div>

              {!showAllMuds && (
                <button
                  onClick={() => setShowAllMuds(true)}
                  className="w-full mt-6 py-2 px-4 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                >
                  See Full List of Ranked MUDs
                  <ChevronDown className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">New & Rising MUDs</h2>
              <div className="space-y-2">
                {filteredNewGames.map((game, index) => (
                  <GameCard key={game.id} game={game} rank={index + 1} />
                ))}
              </div>
            </div>
          </div>

          {/* Right sidebar - hidden on mobile */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-gray-900">Latest News</h2>
                <Link to="/news" className="text-sm text-indigo-600 hover:text-indigo-800">
                  View All
                </Link>
              </div>
              <div className="space-y-4">
                {latestNews.map((post) => (
                  <div key={post.id} className="group">
                    <div className="aspect-w-16 aspect-h-9 mb-2">
                      <img
                        src={post.thumbnail}
                        alt={post.title}
                        className="rounded-lg object-cover w-full h-32"
                      />
                    </div>
                    <h3 className="font-medium text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{post.date}</p>
                  </div>
                ))}
              </div>
              <Link
                to="/news"
                className="mt-4 flex items-center justify-center gap-2 text-indigo-600 hover:text-indigo-800 text-sm font-medium"
              >
                Read more news
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <nav className="grid grid-cols-2 gap-4">
                  <Link to="/about" className="text-sm text-gray-600 hover:text-indigo-600">
                    About
                  </Link>
                  <Link to="/privacy" className="text-sm text-gray-600 hover:text-indigo-600">
                    Privacy Policy
                  </Link>
                  <Link to="/terms" className="text-sm text-gray-600 hover:text-indigo-600">
                    Terms of Use
                  </Link>
                  <Link to="/contact" className="text-sm text-gray-600 hover:text-indigo-600">
                    Contact
                  </Link>
                  <Link to="/faq" className="text-sm text-gray-600 hover:text-indigo-600">
                    FAQ
                  </Link>
                  <Link to="/advertise" className="text-sm text-gray-600 hover:text-indigo-600">
                    Advertise
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Footer links for mobile */}
        <div className="lg:hidden mt-8 pb-8 border-t border-gray-200">
          <nav className="grid grid-cols-2 gap-4 mt-6">
            <Link to="/about" className="text-sm text-gray-600 hover:text-indigo-600">
              About
            </Link>
            <Link to="/privacy" className="text-sm text-gray-600 hover:text-indigo-600">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-gray-600 hover:text-indigo-600">
              Terms of Use
            </Link>
            <Link to="/contact" className="text-sm text-gray-600 hover:text-indigo-600">
              Contact
            </Link>
            <Link to="/faq" className="text-sm text-gray-600 hover:text-indigo-600">
              FAQ
            </Link>
            <Link to="/advertise" className="text-sm text-gray-600 hover:text-indigo-600">
              Advertise
            </Link>
            <Link to="/news" className="text-sm text-gray-600 hover:text-indigo-600">
              News
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}