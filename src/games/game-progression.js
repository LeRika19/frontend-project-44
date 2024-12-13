import getRandomInt from '../utils.js';
import runGame, { roundsToWinCount } from '../index.js';

const description = 'What number is missing in the progression?';

const getProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }

  return progression;
};

const generateRound = () => {
  const start = getRandomInt(1, 10);
  const step = getRandomInt(1, 10);
  const length = getRandomInt(5, 10);
  const progression = getProgression(start, step, length);
  const hiddenIndex = getRandomInt(0, progression.length - 1);
  const missingNumber = progression[hiddenIndex].toString();
  progression[hiddenIndex] = '..';
  return {
    question: `${progression.join(' ')}`,
    answer: missingNumber,
  };
};

const runProgressionGame = () => {
  runGame(description, generateRound, roundsToWinCount);
};
export default runProgressionGame;
