import getRandomInt from '../utils.js';
import runGame, { roundsToWinCount } from '../index.js';

const calculateGcd = (num1, num2) => {
  let newNum1 = num1;
  let newNum2 = num2;
  while (newNum2 !== 0) {
    [newNum1, newNum2] = [newNum2, newNum1 % newNum2];
  }
  return newNum1;
};

const generateRound = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  return {
    question: `${num1} ${num2}`,
    answer: calculateGcd(num1, num2).toString(),
  };
};

const runGcdGame = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  const rounds = [];
  for (let i = 0; i < roundsToWinCount; i += 1) {
    rounds.push(generateRound());
  }

  runGame(description, rounds);
};
export default runGcdGame;
