export interface Game {
  id: string;
  name: string;
  url: string;
  description: string;
  votes: number;
  status: 'online' | 'offline' | 'unknown';
  players: number;
  genre: string;
  founded: string;
  isNew?: boolean;
}

export const games: Game[] = [
  // Original 20 MUDs remain the same
  {
    id: 'aardwolf',
    name: 'Aardwolf',
    url: 'https://www.aardwolf.com',
    description: 'One of the largest and most popular MUDs, featuring extensive questing, PvP, and roleplay systems.',
    votes: 2547,
    status: 'online',
    players: 234,
    genre: 'Fantasy',
    founded: '1996'
  },
  {
    id: 'achaea',
    name: 'Achaea',
    url: 'https://www.achaea.com',
    description: 'A deep, story-rich world with political intrigue, divine intervention, and complex combat systems.',
    votes: 2103,
    status: 'online',
    players: 178,
    genre: 'Fantasy',
    founded: '1997'
  },
  {
    id: 'batmud',
    name: 'BatMUD',
    url: 'https://www.bat.org',
    description: 'A massive fantasy world with unique races, guilds, and extensive crafting systems.',
    votes: 1876,
    status: 'online',
    players: 156,
    genre: 'Fantasy',
    founded: '1990'
  },
  {
    id: 'gemstone',
    name: 'GemStone IV',
    url: 'https://www.play.net/gs4',
    description: 'Premium MUD with rich lore, professional storytelling, and regular events.',
    votes: 1654,
    status: 'online',
    players: 145,
    genre: 'Fantasy',
    founded: '1987'
  },
  {
    id: 'discworld',
    name: 'Discworld MUD',
    url: 'http://discworld.starturtle.net',
    description: 'Based on Terry Pratchett\'s Discworld series, featuring humor and extensive crafting.',
    votes: 1432,
    status: 'online',
    players: 123,
    genre: 'Fantasy/Humor',
    founded: '1991'
  },
  {
    id: 'armageddon',
    name: 'Armageddon',
    url: 'https://www.armageddon.org',
    description: 'Harsh desert world focused on intense roleplay and permanent character death.',
    votes: 1298,
    status: 'online',
    players: 89,
    genre: 'Post-Apocalyptic',
    founded: '1991'
  },
  {
    id: 'threshold',
    name: 'Threshold RPG',
    url: 'https://www.thresholdrpg.com',
    description: 'Roleplay-enforced medieval fantasy world with player-driven politics.',
    votes: 1187,
    status: 'online',
    players: 76,
    genre: 'Fantasy',
    founded: '1996'
  },
  {
    id: 'materia-magica',
    name: 'Materia Magica',
    url: 'https://www.materiamagica.com',
    description: 'Complex magic system and extensive crafting in a vast fantasy world.',
    votes: 1043,
    status: 'online',
    players: 95,
    genre: 'Fantasy',
    founded: '1996'
  },
  {
    id: 'alter-aeon',
    name: 'Alter Aeon',
    url: 'https://www.alteraeon.com',
    description: 'Multi-class system with custom client and screen reader support.',
    votes: 987,
    status: 'online',
    players: 112,
    genre: 'Fantasy',
    founded: '1995'
  },
  {
    id: 'realms-of-despair',
    name: 'Realms of Despair',
    url: 'https://www.realmsofdespair.com',
    description: 'Classic fantasy MUD with extensive questing and PvP systems.',
    votes: 934,
    status: 'online',
    players: 87,
    genre: 'Fantasy',
    founded: '1994'
  },
  {
    id: 'carrion-fields',
    name: 'Carrion Fields',
    url: 'https://www.carrionfields.net',
    description: 'PvP-focused with permanent death and complex political systems.',
    votes: 876,
    status: 'online',
    players: 65,
    genre: 'Dark Fantasy',
    founded: '1994'
  },
  {
    id: 'medievia',
    name: 'Medievia',
    url: 'https://www.medievia.com',
    description: 'Huge world with dragon riding and seafaring adventures.',
    votes: 823,
    status: 'online',
    players: 78,
    genre: 'Fantasy',
    founded: '1992'
  },
  {
    id: 'coffeemud',
    name: 'CoffeeMUD',
    url: 'https://www.coffeemud.org',
    description: 'Java-based MUD with extensive building and scripting systems.',
    votes: 789,
    status: 'online',
    players: 56,
    genre: 'Fantasy',
    founded: '2001'
  },
  {
    id: 'legends-of-the-jedi',
    name: 'Legends of the Jedi',
    url: 'https://www.legendsofthejedi.com',
    description: 'Star Wars-themed MUD with factional warfare and politics.',
    votes: 745,
    status: 'online',
    players: 67,
    genre: 'Sci-Fi',
    founded: '1999'
  },
  {
    id: 'burning-post',
    name: 'The Burning Post II',
    url: 'https://www.tbp2.com',
    description: 'Medieval fantasy with permanent death and political intrigue.',
    votes: 698,
    status: 'online',
    players: 45,
    genre: 'Fantasy',
    founded: '1996'
  },
  {
    id: 'federation-2',
    name: 'Federation 2',
    url: 'https://www.ibgames.net/fed2',
    description: 'Space trading and exploration in a rich sci-fi universe.',
    votes: 654,
    status: 'online',
    players: 34,
    genre: 'Sci-Fi',
    founded: '1990'
  },
  {
    id: 'dragonrealms',
    name: 'DragonRealms',
    url: 'https://www.play.net/dr',
    description: 'Premium fantasy world with deep character development.',
    votes: 623,
    status: 'online',
    players: 89,
    genre: 'Fantasy',
    founded: '1996'
  },
  {
    id: 'shadows-of-isildur',
    name: 'Shadows of Isildur',
    url: 'https://www.shadowsofisildur.org',
    description: 'Tolkien-based world with permadeath and crafting focus.',
    votes: 567,
    status: 'online',
    players: 43,
    genre: 'Fantasy',
    founded: '2000'
  },
  {
    id: 'avalon',
    name: 'Avalon: The Legend Lives',
    url: 'https://www.avalon-rpg.com',
    description: 'British fantasy MUD with complex political and magic systems.',
    votes: 534,
    status: 'online',
    players: 56,
    genre: 'Fantasy',
    founded: '1989'
  },
  {
    id: 'ancient-anguish',
    name: 'Ancient Anguish',
    url: 'https://www.anguish.org',
    description: 'Friendly community with extensive questing and roleplay.',
    votes: 489,
    status: 'online',
    players: 45,
    genre: 'Fantasy',
    founded: '1992'
  },
  // Additional MUDs (21-50)
  {
    id: 'dark-risings',
    name: 'Dark Risings',
    url: 'https://www.darkrisings.org',
    description: 'Gothic horror MUD with unique vampire and werewolf systems.',
    votes: 456,
    status: 'online',
    players: 34,
    genre: 'Horror',
    founded: '1998'
  },
  {
    id: 'forgotten-kingdoms',
    name: 'Forgotten Kingdoms',
    url: 'https://www.forgottenkingdoms.org',
    description: 'Dungeons & Dragons based MUD with faithful adaptation of rules.',
    votes: 423,
    status: 'online',
    players: 28,
    genre: 'Fantasy',
    founded: '1999'
  },
  {
    id: 'cosmic-rage',
    name: 'Cosmic Rage',
    url: 'https://www.cosmicrage.org',
    description: 'Space exploration MUD with advanced ship combat.',
    votes: 398,
    status: 'online',
    players: 25,
    genre: 'Sci-Fi',
    founded: '2001'
  },
  {
    id: 'end-of-time',
    name: 'End of Time',
    url: 'https://www.endoftime.org',
    description: 'Post-apocalyptic MUD with survival mechanics.',
    votes: 367,
    status: 'online',
    players: 22,
    genre: 'Post-Apocalyptic',
    founded: '2002'
  },
  {
    id: 'luminari',
    name: 'Luminari',
    url: 'https://www.luminarimud.com',
    description: 'Modern fantasy MUD with innovative magic system.',
    votes: 345,
    status: 'online',
    players: 19,
    genre: 'Fantasy',
    founded: '2003'
  },
  {
    id: 'new-worlds',
    name: 'New Worlds',
    url: 'https://www.newworlds.org',
    description: 'Historical fantasy with detailed crafting and economy.',
    votes: 321,
    status: 'online',
    players: 18,
    genre: 'Fantasy',
    founded: '2000'
  },
  {
    id: 'eternal-city',
    name: 'The Eternal City',
    url: 'https://www.eternalcity.org',
    description: 'Roman-themed MUD with political intrigue.',
    votes: 298,
    status: 'online',
    players: 15,
    genre: 'Historical',
    founded: '1996'
  },
  {
    id: 'shadow-storm',
    name: 'Shadow Storm',
    url: 'https://www.shadowstorm.org',
    description: 'Dark fantasy with unique shadow magic system.',
    votes: 276,
    status: 'online',
    players: 14,
    genre: 'Dark Fantasy',
    founded: '2004'
  },
  {
    id: 'lost-souls',
    name: 'Lost Souls',
    url: 'https://www.lostsouls.org',
    description: 'Philosophical MUD with deep character development.',
    votes: 254,
    status: 'online',
    players: 12,
    genre: 'Fantasy',
    founded: '1990'
  },
  {
    id: 'cyber-assault',
    name: 'Cyber Assault',
    url: 'https://www.cyberassault.org',
    description: 'Cyberpunk MUD with hacking and corporate warfare.',
    votes: 232,
    status: 'online',
    players: 11,
    genre: 'Cyberpunk',
    founded: '2005'
  },
  {
    id: 'realms-of-chaos',
    name: 'Realms of Chaos',
    url: 'https://www.realmsofchaos.org',
    description: 'Chaos-themed MUD with unpredictable events.',
    votes: 210,
    status: 'online',
    players: 10,
    genre: 'Fantasy',
    founded: '1998'
  },
  {
    id: 'dragon-heart',
    name: 'Dragon Heart',
    url: 'https://www.dragonheart.org',
    description: 'Dragon-focused MUD with aerial combat.',
    votes: 198,
    status: 'online',
    players: 9,
    genre: 'Fantasy',
    founded: '2006'
  },
  {
    id: 'mystical-realms',
    name: 'Mystical Realms',
    url: 'https://www.mysticalrealms.org',
    description: 'Magic-focused MUD with elemental powers.',
    votes: 187,
    status: 'online',
    players: 8,
    genre: 'Fantasy',
    founded: '2007'
  },
  {
    id: 'frozen-north',
    name: 'Frozen North',
    url: 'https://www.frozennorth.org',
    description: 'Norse mythology MUD with survival elements.',
    votes: 176,
    status: 'online',
    players: 7,
    genre: 'Mythology',
    founded: '2008'
  },
  {
    id: 'steampunk-adventures',
    name: 'Steampunk Adventures',
    url: 'https://www.steampunkadventures.org',
    description: 'Victorian steampunk world with inventions.',
    votes: 165,
    status: 'online',
    players: 6,
    genre: 'Steampunk',
    founded: '2009'
  }
];

export const newGames: Game[] = [
  {
    id: 'eternal-darkness',
    name: 'Eternal Darkness',
    url: 'https://eternaldarkness.net',
    description: 'New horror-themed MUD with unique sanity mechanics and modern features.',
    votes: 156,
    status: 'online',
    players: 45,
    genre: 'Horror',
    founded: '2023',
    isNew: true
  },
  {
    id: 'stellar-horizons',
    name: 'Stellar Horizons',
    url: 'https://stellarhorizons.space',
    description: 'Modern space exploration MUD with procedurally generated worlds.',
    votes: 134,
    status: 'online',
    players: 38,
    genre: 'Sci-Fi',
    founded: '2023',
    isNew: true
  },
  {
    id: 'chronicles-of-fate',
    name: 'Chronicles of Fate',
    url: 'https://chroniclesoffate.com',
    description: 'Story-driven MUD with branching narratives and consequences.',
    votes: 98,
    status: 'online',
    players: 29,
    genre: 'Fantasy',
    founded: '2024',
    isNew: true
  },
  {
    id: 'cyberpunk-2100',
    name: 'Cyberpunk 2100',
    url: 'https://cyberpunk2100.net',
    description: 'Cyberpunk-themed MUD with hacking and corporate warfare.',
    votes: 87,
    status: 'online',
    players: 25,
    genre: 'Cyberpunk',
    founded: '2023',
    isNew: true
  },
  {
    id: 'mythic-realms',
    name: 'Mythic Realms',
    url: 'https://mythicrealms.world',
    description: 'Mythology-based MUD featuring multiple pantheons and divine quests.',
    votes: 76,
    status: 'online',
    players: 22,
    genre: 'Mythology',
    founded: '2024',
    isNew: true
  }
];