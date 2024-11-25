import { getRandomInt } from '../utils.js';
import { roundsToWinCount } from '../index.js';
import runGame from '../index.js';

const operators = ['+', '-', '*'];

const calculate = (number1, number2, oper) => {
  let result;
  switch (oper) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
      throw new Error('Error: Unknown calculate!')
  }
  return result;
};

const generateRound = () => {
  const num1 = getRandomInt(1, 50);
  const num2 = getRandomInt(1, 50);

  const operator = operators[getRandomInt(0, operators.length - 1)];
  const correctAnswer = calculate(num1, num2, operator).toString();

  return {
    question: `${num1} ${operator} ${num2}`,
    answer: correctAnswer,
  }
}

const runCalcGame = () => {
  const description = 'What is the result of the expression?';
  const rounds = [];
  for (let i = 0; i < roundsToWinCount; i += 1) {
    rounds.push(generateRound());
  }

  runGame(description, rounds);
};
export default runCalcGame;
