import { greetUser, compareAnswers, roundsToWinCount } from './utils.js';
import readlineSync from 'readline-sync';

export const runGame = (description, questionsCollection) => {
  const userName = greetUser();
  console.log(description);

  let correctAnswersCount = 0;
  let counter = 0;

  while (correctAnswersCount < roundsToWinCount) {
    console.log(`Question: ${questionsCollection[counter].question}`);
    let userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    const isCorrect = compareAnswers(userAnswer, questionsCollection[counter].answer, userName);
    counter += 1;
    if (isCorrect === true) {
      correctAnswersCount += 1;
    } else {
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

