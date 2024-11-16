import { getRandomInt, roundsToWinCount } from '../utils.js';
import { runGame } from '../index.js';

const isEven = (num) => num % 2 === 0;

export const runEvenGame = () => {
  let description = 'Answer "yes" if the number is even, otherwise answer "no".';
  let questionsCollection = [];

  let counter = 0;
  
  while (counter < roundsToWinCount) {
    const randomNumber = getRandomInt(1, 100);
    let correctAnswer = isEven(randomNumber) ? "yes" : "no";
    let round = {
      question: randomNumber,
      answer: correctAnswer
    }
    questionsCollection.push(round);
    counter += 1;
  }

  runGame(description, questionsCollection);
};
