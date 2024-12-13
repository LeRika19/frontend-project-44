import getRandomInt from '../utils.js';
import runGame, { roundsToWinCount } from '../index.js';

const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown operator ${operator}!`);
  }
};

const generateRound = () => {
  const number1 = getRandomInt(1, 50);
  const number2 = getRandomInt(1, 50);

  const operator = operators[getRandomInt(0, operators.length - 1)];
  const correctAnswer = calculate(number1, number2, operator).toString();

  return {
    question: `${number1} ${operator} ${number2}`,
    answer: correctAnswer,
  };
};

const runCalcGame = () => {
  runGame(description, generateRound, roundsToWinCount);
};
export default runCalcGame;
