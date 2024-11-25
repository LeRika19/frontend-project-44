import getRandomInt from '../utils.js';
import runGame, { roundsToWinCount } from '../index.js';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const randomNumber = getRandomInt(1, 100);
  return {
    question: randomNumber,
    answer: isEven(randomNumber) ? 'yes' : 'no',
  };
};

const runEvenGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const rounds = [];
  for (let i = 0; i < roundsToWinCount; i += 1) {
    rounds.push(generateRound());
  }

  runGame(description, rounds);
};
export default runEvenGame;
