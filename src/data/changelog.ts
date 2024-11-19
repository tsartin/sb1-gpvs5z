export interface ChangelogEntry {
  id: string;
  date: string;
  type: 'feature' | 'improvement' | 'fix' | 'update';
  title: string;
  description: string;
}

export const changelog: ChangelogEntry[] = [
  {
    id: 'v1.2.0',
    date: '2024-03-15',
    type: 'feature',
    title: 'Added Comment System',
    description: 'Users can now comment on MUD games and engage with the community.'
  },
  {
    id: 'v1.1.0',
    date: '2024-03-10',
    type: 'feature',
    title: 'Category Filtering',
    description: 'Added ability to filter MUDs by genre categories.'
  },
  {
    id: 'v1.0.1',
    date: '2024-03-05',
    type: 'fix',
    title: 'Performance Improvements',
    description: 'Optimized page loading times and improved overall site performance.'
  },
  {
    id: 'v1.0.0',
    date: '2024-03-01',
    type: 'feature',
    title: 'Initial Release',
    description: 'Launched the MUD Directory with game listings and voting system.'
  }
];