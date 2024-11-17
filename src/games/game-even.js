import { getRandomInt, roundsToWinCount } from '../utils.js';
import runGame from '../index.js';

const isEven = (num) => num % 2 === 0;

const runEvenGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const questionsCollection = [];
  let counter = 0;
  while (counter < roundsToWinCount) {
    const randomNumber = getRandomInt(1, 100);
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    const round = {
      question: randomNumber,
      answer: correctAnswer,
    };
    questionsCollection.push(round);
    counter += 1;
  }

  runGame(description, questionsCollection);
};
export default runEvenGame;
