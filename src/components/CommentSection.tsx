import React, { useState } from 'react';
import { ThumbsUp, MessageSquare } from 'lucide-react';
import { Comment } from '../data/comments';
import { SignUpModal } from './SignUpModal';
import { CommentForm } from './CommentForm';

interface CommentSectionProps {
  gameId: string;
  comments: Comment[];
}

export function CommentSection({ gameId, comments }: CommentSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showCommentForm, setShowCommentForm] = useState(false);

  const handleLikeClick = () => {
    setIsModalOpen(true);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="mt-8 pt-8 border-t border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Comments ({comments.length})
        </h2>
        <button
          onClick={() => setShowCommentForm(true)}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <MessageSquare className="w-4 h-4" />
          Add Comment
        </button>
      </div>

      {showCommentForm && (
        <CommentForm
          onCancel={() => setShowCommentForm(false)}
          onSubmit={() => setIsModalOpen(true)}
        />
      )}

      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-gray-50 rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium text-gray-900">{comment.author}</h3>
                <span className="text-sm text-gray-500">
                  {formatDate(comment.createdAt)}
                </span>
              </div>
              <button
                onClick={handleLikeClick}
                className="flex items-center gap-1 text-gray-500 hover:text-indigo-600"
              >
                <ThumbsUp className="w-4 h-4" />
                <span className="text-sm">{comment.likes}</span>
              </button>
            </div>
            <p className="text-gray-700">{comment.content}</p>
          </div>
        ))}
      </div>

      <SignUpModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}