export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: 'interview' | 'announcement' | 'guide' | 'review';
  mudName?: string;
  thumbnail: string;
}

export const posts: Post[] = [
  {
    id: 'aardwolf-interview-2024',
    title: 'Behind the Scenes: 25 Years of Aardwolf',
    excerpt: 'An exclusive interview with the creators of Aardwolf MUD, discussing their journey, challenges, and future plans.',
    content: 'Full interview content here...',
    author: 'MUD Directory Team',
    date: '2024-03-15',
    category: 'interview',
    mudName: 'Aardwolf',
    thumbnail: 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=800&auto=format&fit=crop'
  },
  {
    id: 'achaea-expansion-2024',
    title: 'Achaea Announces Major Expansion',
    excerpt: 'Iron Realms Entertainment reveals details about the upcoming expansion for Achaea, Dreams of Divine Lands.',
    content: 'Full announcement content here...',
    author: 'Iron Realms',
    date: '2024-03-10',
    category: 'announcement',
    mudName: 'Achaea',
    thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&auto=format&fit=crop'
  }
];