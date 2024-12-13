import getRandomInt from '../utils.js';
import runGame, { roundsToWinCount } from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) return false;
  const numberOfChecks = Math.sqrt(num);

  for (let i = 2; i <= numberOfChecks; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const generateRound = () => {
  const number = getRandomInt(1, 100);
  return {
    question: number.toString(),
    answer: isPrime(number) ? 'yes' : 'no',
  };
};

const runPrimeGame = () => {
  runGame(description, generateRound, roundsToWinCount);
};
export default runPrimeGame;
