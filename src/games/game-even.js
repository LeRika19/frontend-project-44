import { getRandomInt } from '../utils.js';
import { roundsToWinCount } from '../index.js';
import runGame from '../index.js';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  return {
    question: getRandomInt(1, 100),
    answer: isEven(randomNumber) ? 'yes' : 'no',
  }
};

const runEvenGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const rounds = [];
  for (let i = 0; i < roundsToWinCount; i += 1) {
    rounds.push(generateRound());
  }

  runGame(description, rounds);
};
export default runEvenGame;
