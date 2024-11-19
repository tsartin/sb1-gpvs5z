import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowBigUp, Users, Globe, Calendar, ArrowLeft, ExternalLink } from 'lucide-react';
import { games } from '../data/games';
import { comments } from '../data/comments';
import { SignUpModal } from './SignUpModal';
import { CommentSection } from './CommentSection';

export function GameDetail() {
  const { id } = useParams();
  const game = games.find(g => g.id === id);
  const gameComments = comments.filter(c => c.gameId === id);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!game) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Game not found</h1>
          <Link to="/" className="text-indigo-600 hover:text-indigo-800 flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to directory
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="text-indigo-600 hover:text-indigo-800 flex items-center gap-2 mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to directory
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex justify-between items-start mb-6">
            <h1 className="text-3xl font-bold text-gray-900">{game.name}</h1>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 hover:bg-indigo-50 p-2 rounded-lg transition-colors"
              >
                <ArrowBigUp className="w-6 h-6 text-indigo-600" />
                <span className="text-xl font-semibold text-gray-700">{game.votes.toLocaleString()}</span>
              </button>
              <a
                href={game.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Play Now
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-gray-600 mb-1">
                <Users className="w-5 h-5" />
                <span className="font-medium">Players Online</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">{game.players}</span>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-gray-600 mb-1">
                <Globe className="w-5 h-5" />
                <span className="font-medium">Genre</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">{game.genre}</span>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-gray-600 mb-1">
                <Calendar className="w-5 h-5" />
                <span className="font-medium">Founded</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">{game.founded}</span>
            </div>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">About</h2>
            <p className="text-gray-600 leading-relaxed">{game.description}</p>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium
              ${game.status === 'online' ? 'bg-green-100 text-green-800' : 
                game.status === 'offline' ? 'bg-red-100 text-red-800' : 
                'bg-gray-100 text-gray-800'}`}>
              {game.status.charAt(0).toUpperCase() + game.status.slice(1)}
            </span>
          </div>

          <CommentSection gameId={game.id} comments={gameComments} />
        </div>
      </div>

      <SignUpModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}