import getRandomInt from '../utils.js';
import runGame, { roundsToWinCount } from '../index.js';

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
  const num1 = getRandomInt(1, 50);
  const num2 = getRandomInt(1, 50);

  const operator = operators[getRandomInt(0, operators.length - 1)];
  const correctAnswer = calculate(num1, num2, operator).toString();

  return {
    question: `${num1} ${operator} ${num2}`,
    answer: correctAnswer,
  };
};

const runCalcGame = () => {
  const description = 'What is the result of the expression?';
  const rounds = [];
  for (let i = 0; i < roundsToWinCount; i += 1) {
    rounds.push(generateRound());
  }

  runGame(description, rounds);
};
export default runCalcGame;
