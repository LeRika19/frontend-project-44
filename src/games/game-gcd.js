import { getRandomInt, roundsToWinCount } from '../utils.js';
import { runGame } from '../index.js';

const calculateGcd = (num1, num2) => {
  let newNum1 = num1;
  let newNum2 = num2;
  while (newNum2 !== 0) {
    [newNum1, newNum2] = [newNum2, newNum1 % newNum2];
  }
  return newNum1;
};

export const runGcdGame = () => {
  let description = 'Find the greatest common divisor of given numbers.';
  let questionsCollection = [];

  let counter = 0;
  
  while (counter < roundsToWinCount) {
    const num1 = getRandomInt(1, 100);
    const num2 = getRandomInt(1, 100);
    const correctAnswer = calculateGcd(num1, num2);
    let round = {
      question: `${num1} ${num2}`,
      answer: correctAnswer
    }
    questionsCollection.push(round);
    counter += 1;
  }

  runGame(description, questionsCollection);
};
