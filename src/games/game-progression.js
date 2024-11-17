import { getRandomInt, roundsToWinCount } from '../utils.js';
import runGame from '../index.js';

const generateProgression = () => {
  const start = getRandomInt(1, 10);
  const step = getRandomInt(1, 10);
  const length = getRandomInt(5, 10);

  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }

  const hiddenIndex = getRandomInt(0, length - 1);
  const hiddenValue = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  return { progression, hiddenValue };
};

const runProgressionGame = () => {
  const description = 'What number is missing in the progression?';
  const questionsCollection = [];
  let counter = 0;
  
  while (counter < roundsToWinCount) {
    const { progression, hiddenValue: correctAnswer } = generateProgression();
    const round = {
      question: `${progression.join(' ')}`,
      answer: correctAnswer,
    };
    questionsCollection.push(round);
    counter += 1;
  }

  runGame(description, questionsCollection);
};
export default runProgressionGame;
