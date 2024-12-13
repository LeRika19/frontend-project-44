import getRandomInt from '../utils.js';
import runGame, { roundsToWinCount } from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const calculateGcd = (number1, number2) => {
  while (number2 !== 0) {
    [number1, number2] = [number2, number1 % number2];
  }
  return number1;
};

const generateRound = () => {
  const number1 = getRandomInt(1, 100);
  const number2 = getRandomInt(1, 100);
  return {
    question: `${number1} ${number2}`,
    answer: calculateGcd(number1, number2).toString(),
  };
};

const runGcdGame = () => {
  runGame(description, generateRound, roundsToWinCount);
};
export default runGcdGame;
