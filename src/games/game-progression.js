import getRandomInt from '../utils.js';
import runGame, { roundsToWinCount } from '../index.js';

const getProgression = (length) => {
  const start = getRandomInt(1, 10);
  const step = getRandomInt(1, 10);
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }

  return progression;
};

const generateRound = () => {
  const length = getRandomInt(5, 10);
  const progression = getProgression(length);
  const hiddenIndex = getRandomInt(0, progression.length - 1);
  const hiddenValue = progression[hiddenIndex].toString();
  progression[hiddenIndex] = '..';
  return {
    question: `${progression.join(' ')}`,
    answer: hiddenValue,
  };
};

const runProgressionGame = () => {
  const description = 'What number is missing in the progression?';
  const rounds = [];
  for (let i = 0; i < roundsToWinCount; i += 1) {
    rounds.push(generateRound());
  }

  runGame(description, rounds);
};
export default runProgressionGame;
