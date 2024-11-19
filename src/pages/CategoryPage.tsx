import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Search, SortAsc, Users } from 'lucide-react';
import { games, newGames } from '../data/games';
import { GameCard } from '../components/GameCard';

export function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'votes' | 'players'>('votes');

  const filterAndSortGames = (gameList: typeof games) =>
    gameList
      .filter(game => 
        game.genre.toLowerCase() === category?.toLowerCase() &&
        (game.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.description.toLowerCase().includes(searchTerm.toLowerCase()))
      )
      .sort((a, b) => sortBy === 'votes' ? b.votes - a.votes : b.players - a.players);

  const filteredGames = filterAndSortGames([...games, ...newGames]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-indigo-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">
            {category?.charAt(0).toUpperCase() + category?.slice(1)} MUDs
          </h1>
          <p className="text-indigo-100 text-lg">
            Discover the best {category} Multi-User Dungeon games
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
                placeholder="Search games..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setSortBy('votes')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
                  sortBy === 'votes'
                    ? 'bg-indigo-50 border-indigo-200 text-indigo-700'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <SortAsc className="w-5 h-5" />
                Votes
              </button>
              <button
                onClick={() => setSortBy('players')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
                  sortBy === 'players'
                    ? 'bg-indigo-50 border-indigo-200 text-indigo-700'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Users className="w-5 h-5" />
                Players
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          {filteredGames.length > 0 ? (
            filteredGames.map((game, index) => (
              <GameCard key={game.id} game={game} rank={index + 1} />
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">No games found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}