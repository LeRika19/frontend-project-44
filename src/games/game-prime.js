import readlineSync from 'readline-sync';
import { greetUser, getRandomInt } from '../cli.js';
import compareAnswers from '../index.js';

//  Функция для проверки, является ли число простым
//  Math.sqrt(num) проверяет есть ли у числа еще делители если нет то это простое число
const isPrime = (num) => {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

//  Функция для запуска игры
const playPrimeGame = () => {
  const userName = greetUser();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let correctAnswersCount = 0;
  const roundsToWin = 3;

  while (correctAnswersCount < roundsToWin) {
    const randomNumber = getRandomInt(1, 100);
    let correctAnswer;

    if (isPrime(randomNumber)) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    const userAnswer = readlineSync.question(`Question: ${randomNumber}\nYour answer:`);
    const isCorrect = compareAnswers(userAnswer, correctAnswer, userName);
    if (isCorrect === true) {
      correctAnswersCount += 1;
    } else {
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default playPrimeGame;
