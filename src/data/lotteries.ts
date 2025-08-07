import { 
  Zap, // For Powerball 
  CircleDollarSign, // For Mega Millions
  DollarSign, // For Lotto America
  Palmtree, // For Florida Lotto
  Building2, // For New York Lotto
  Star, // For Texas Lotto
  Gem, // For Georgia Fantasy 5
} from 'lucide-react';

export interface Lottery {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  mainNumbers: {
    count: number;
    min: number;
    max: number;
  };
  specialNumbers?: {
    count: number;
    min: number;
    max: number;
    name: string;
    color: string;
  };
  drawDays: string[];
  jackpotAmount?: string;
}

const lotteries: Lottery[] = [
  {
    id: 'powerball',
    name: 'Powerball',
    description: 'America\'s favorite lottery game with massive jackpots',
    icon: Zap,
    mainNumbers: {
      count: 5,
      min: 1,
      max: 69
    },
    specialNumbers: {
      count: 1,
      min: 1,
      max: 26,
      name: 'Powerball',
      color: 'bg-red-600'
    },
    drawDays: ['Monday', 'Wednesday', 'Saturday'],
    jackpotAmount: '$253 Million'
  },
  {
    id: 'mega-millions',
    name: 'Mega Millions',
    description: 'Multi-state lottery with some of the largest jackpots in history',
    icon: CircleDollarSign,
    mainNumbers: {
      count: 5,
      min: 1,
      max: 70
    },
    specialNumbers: {
      count: 1,
      min: 1,
      max: 25,
      name: 'Mega Ball',
      color: 'bg-yellow-500'
    },
    drawDays: ['Tuesday', 'Friday'],
    jackpotAmount: '$148 Million'
  },
  {
    id: 'lotto-america',
    name: 'Lotto America',
    description: 'Multi-state game with better odds than Powerball and Mega Millions',
    icon: DollarSign,
    mainNumbers: {
      count: 5,
      min: 1,
      max: 52
    },
    specialNumbers: {
      count: 1,
      min: 1,
      max: 10,
      name: 'Star Ball',
      color: 'bg-blue-500'
    },
    drawDays: ['Wednesday', 'Saturday'],
    jackpotAmount: '$4.79 Million'
  },
  {
    id: 'florida-lotto',
    name: 'Florida Lotto',
    description: 'Florida\'s favorite lottery game with jackpots starting at $1 million',
    icon: Palmtree,
    mainNumbers: {
      count: 6,
      min: 1,
      max: 53
    },
    drawDays: ['Wednesday', 'Saturday'],
    jackpotAmount: '$8.5 Million'
  },
  {
    id: 'new-york-lotto',
    name: 'New York Lotto',
    description: 'New York\'s flagship lottery game with jackpots starting at $2 million',
    icon: Building2,
    mainNumbers: {
      count: 6,
      min: 1,
      max: 59
    },
    drawDays: ['Wednesday', 'Saturday'],
    jackpotAmount: '$15.2 Million'
  },
  {
    id: 'texas-lotto',
    name: 'Texas Lotto',
    description: 'Texas Lottery\'s original jackpot game',
    icon: Star,
    mainNumbers: {
      count: 6,
      min: 1,
      max: 54
    },
    drawDays: ['Monday', 'Wednesday', 'Saturday'],
    jackpotAmount: '$30.25 Million'
  },
  {
    id: 'georgia-fantasy-5',
    name: 'Georgia Fantasy 5',
    description: 'Georgia\'s daily jackpot game with better odds',
    icon: Gem,
    mainNumbers: {
      count: 5,
      min: 1,
      max: 42
    },
    drawDays: ['Daily'],
    jackpotAmount: '$150,000'
  }
];

export default lotteries;