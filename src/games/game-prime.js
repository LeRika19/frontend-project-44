import getRandomInt from '../utils.js';
import runGame, { roundsToWinCount } from '../index.js';

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
  const randomNumber = getRandomInt(1, 100);
  return {
    question: randomNumber.toString(),
    answer: isPrime(randomNumber) ? 'yes' : 'no',
  };
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
