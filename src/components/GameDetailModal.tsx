import React, { useEffect } from 'react';
import { ArrowBigUp, Users, Globe, Calendar, X, ExternalLink } from 'lucide-react';
import { Game } from '../data/games';
import { comments } from '../data/comments';
import { CommentSection } from './CommentSection';
import { SignUpModal } from './SignUpModal';

interface GameDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  game: Game;
}

export function GameDetailModal({ isOpen, onClose, game }: GameDetailModalProps) {
  const gameComments = comments.filter(c => c.gameId === game.id);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">{game.name}</h1>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
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

          <div className="prose max-w-none mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">About</h2>
            <p className="text-gray-600 leading-relaxed">{game.description}</p>
          </div>

          <div className="flex justify-end gap-4 mb-8">
            <div className="flex items-center gap-2">
              <ArrowBigUp className="w-6 h-6 text-indigo-600" />
              <span className="text-xl font-semibold text-gray-700">
                {game.votes.toLocaleString()}
              </span>
            </div>
            <a
              href={game.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Play Now
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <CommentSection gameId={game.id} comments={gameComments} />
        </div>
      </div>
    </div>
  );
}