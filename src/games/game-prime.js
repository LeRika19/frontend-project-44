import { getRandomInt, roundsToWinCount } from '../utils.js';
import { runGame } from '../index.js';

const isPrime = (num) => {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

export const runPrimeGame = () => {
  let description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  let questionsCollection = [];

  let counter = 0;
 
  while (counter < roundsToWinCount) {
    const randomNumber = getRandomInt(1, 100);
    let correctAnswer = isPrime(randomNumber) ? "yes" : "no";
    let round = {
      question: randomNumber,
      answer: correctAnswer
    }
    questionsCollection.push(round);
    counter += 1;
  }

  runGame(description, questionsCollection);
};
