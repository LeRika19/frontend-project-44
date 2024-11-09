import readlineSync from 'readline-sync';
import { greetUser, getRandomInt } from '../cli.js';
import compareAnswers from '../index.js';

//  Функция для вычисления НОД (с помощью алгоритма Евклида, 
//  работает так: если одно из чисел равно нулю, 
//  то наибольший общий делитель равен другому числу. 
//  Цикл продолжается до тех пор, пока num2 не станет равен нулю.)
const calculateGcd = (num1, num2) => {
  let newNum1 = num1;
  let newNum2 = num2;
  while (newNum2 !== 0) {
    [newNum1, newNum2] = [newNum2, newNum1 % newNum2];
  }
  return newNum1;
};

// Основная функция игры
const brainGcdGame = () => {
  const userName = greetUser();
  console.log('Find the greatest common divisor of given numbers.');
  let correctAnswersCount = 0;
  const roundsToWin = 3;  // количество раундов для победы

  while (correctAnswersCount < roundsToWin) {
    const num1 = getRandomInt(1, 100);
    const num2 = getRandomInt(1, 100);

    const correctAnswer = calculateGcd(num1, num2);
    console.log(`Question: ${num1} ${num2}`);
    let userAnswer = readlineSync.question('Your answer: ');

    userAnswer = parseInt(userAnswer, 10);    
    const isCorrect = compareAnswers(userAnswer, correctAnswer, userName);
    if (isCorrect === true) {
      correctAnswersCount += 1;
    } else {
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default brainGcdGame;
