import { Lottery } from '../data/lotteries';

interface UserPreferences {
  zipCode: string;
  date: string;
  budget: string;
}

// Generate a set of unique random numbers within a range
function generateUniqueNumbers(count: number, min: number, max: number): number[] {
  const numbers: number[] = [];
  
  while (numbers.length < count) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    
    if (!numbers.includes(num)) {
      numbers.push(num);
    }
  }
  
  return numbers.sort((a, b) => a - b);
}

// Generate a complete set of lottery numbers based on lottery rules
function generateLotteryNumbers(lottery: Lottery): {
  mainNumbers: number[];
  specialNumbers?: number[];
} {
  const mainNumbers = generateUniqueNumbers(
    lottery.mainNumbers.count,
    lottery.mainNumbers.min,
    lottery.mainNumbers.max
  );
  
  let specialNumbers;
  if (lottery.specialNumbers) {
    specialNumbers = generateUniqueNumbers(
      lottery.specialNumbers.count,
      lottery.specialNumbers.min,
      lottery.specialNumbers.max
    );
  }
  
  return {
    mainNumbers,
    specialNumbers
  };
}

// Main function to generate multiple sets of lottery numbers
export function generateLuckyNumbers(
  lottery: Lottery, 
  preferences: UserPreferences,
  count: number = 3
): Array<{
  mainNumbers: number[];
  specialNumbers?: number[];
}> {
  // In a real application, we would use the preferences to influence the generation
  // For now, we'll just generate random numbers
  
  const results = [];
  
  for (let i = 0; i < count; i++) {
    results.push(generateLotteryNumbers(lottery));
  }
  
  return results;
}

// Format numbers as strings with leading zeros if needed
export function formatNumber(num: number): string {
  return num < 10 ? `0${num}` : `${num}`;
}