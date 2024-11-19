import React, { useState } from 'react';
import { ArrowBigUp, Users, Globe, Calendar } from 'lucide-react';
import { Game } from '../data/games';
import { SignUpModal } from './SignUpModal';
import { GameDetailModal } from './GameDetailModal';

interface GameCardProps {
  game: Game;
  rank: number;
}

export function GameCard({ game, rank }: GameCardProps) {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isGameDetailOpen, setIsGameDetailOpen] = useState(false);

  const handleVoteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSignUpModalOpen(true);
  };

  return (
    <>
      <div 
        onClick={() => setIsGameDetailOpen(true)}
        className="bg-white rounded-md shadow-sm hover:shadow transition-shadow p-2.5 cursor-pointer"
      >
        <div className="flex items-center gap-2">
          <div className="flex-shrink-0 w-6 h-6 bg-indigo-50 rounded-full flex items-center justify-center">
            <span className="text-xs font-bold text-indigo-600">#{rank}</span>
          </div>
          
          <div className="flex-grow min-w-0">
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-sm font-bold text-gray-900 truncate">{game.name}</h2>
              <button 
                onClick={handleVoteClick}
                className="flex items-center gap-1 hover:bg-indigo-50 p-1 rounded transition-colors shrink-0"
              >
                <ArrowBigUp className="w-3.5 h-3.5 text-indigo-600" />
                <span className="font-medium text-xs text-gray-700">{game.votes.toLocaleString()}</span>
              </button>
            </div>
            
            <div className="flex items-center gap-3 mt-0.5 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                <span>{game.players}</span>
              </div>
              <div className="flex items-center gap-1">
                <Globe className="w-3 h-3" />
                <span className="truncate">{game.genre}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{game.founded}</span>
              </div>
              <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-medium
                ${game.status === 'online' ? 'bg-green-100 text-green-800' : 
                  game.status === 'offline' ? 'bg-red-100 text-red-800' : 
                  'bg-gray-100 text-gray-800'}`}>
                {game.status.charAt(0).toUpperCase() + game.status.slice(1)}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <SignUpModal 
        isOpen={isSignUpModalOpen} 
        onClose={() => setIsSignUpModalOpen(false)} 
      />

      <GameDetailModal
        isOpen={isGameDetailOpen}
        onClose={() => setIsGameDetailOpen(false)}
        game={game}
      />
    </>
  );
}