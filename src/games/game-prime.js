import { getRandomInt } from '../utils.js';
import { roundsToWinCount } from '../index.js';
import runGame from '../index.js';

const isPrime = (num) => {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const generateRound = () => {
  const randomNumber = getRandomInt(1, 100);
  return {
    question: randomNumber,
    answer: isPrime(randomNumber) ? 'yes' : 'no',
  }
};

const runPrimeGame = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const rounds = [];
  for (let i = 0; i < roundsToWinCount; i += 1) {
    rounds.push(generateRound());
  }

  runGame(description, rounds);
};
export default runPrimeGame;
