import { getRandomInt, roundsToWinCount } from '../utils.js';
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
      result = null;
      break;
  }
  return result;
};

const generateExpression = () => {
  const num1 = getRandomInt(1, 50);
  const num2 = getRandomInt(1, 50);

  const operator = operators[getRandomInt(0, operators.length - 1)];
  const correctAnswer = calculate(num1, num2, operator);
  return { expression: `${num1} ${operator} ${num2}`, correctAnswer };
};

const runCalcGame = () => {
  const description = 'What is the result of the expression?';
  const questionsCollection = [];
  let counter = 0;
  while (counter < roundsToWinCount) {
    const { expression, correctAnswer } = generateExpression();
    const round = {
      question: expression,
      answer: correctAnswer,
    };
    questionsCollection.push(round);
    counter += 1;
  }

  runGame(description, questionsCollection);
};
export default runCalcGame;
