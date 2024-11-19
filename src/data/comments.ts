export interface Comment {
  id: string;
  gameId: string;
  author: string;
  content: string;
  createdAt: string;
  likes: number;
}

// Sample comments data
export const comments: Comment[] = [
  {
    id: '1',
    gameId: 'aardwolf',
    author: 'MUDMaster',
    content: 'One of the best MUDs I\'ve played. The community is incredibly helpful and welcoming.',
    createdAt: '2024-03-15T10:30:00Z',
    likes: 12
  },
  {
    id: '2',
    gameId: 'aardwolf',
    author: 'DragonSlayer',
    content: 'Great progression system and always something new to discover.',
    createdAt: '2024-03-14T15:45:00Z',
    likes: 8
  }
];