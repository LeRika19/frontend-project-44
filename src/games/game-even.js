import getRandomInt from '../utils.js';
import runGame, { roundsToWinCount } from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const number = getRandomInt(1, 100);
  return {
    question: number.toString(),
    answer: isEven(number) ? 'yes' : 'no',
  };
};

const runEvenGame = () => {
  runGame(description, generateRound, roundsToWinCount);
};
export default runEvenGame;
