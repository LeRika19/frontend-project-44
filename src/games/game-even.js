import readlineSync from 'readline-sync';
import { greetUser, getRandomInt } from '../cli.js';
import compareAnswers from '../index.js';

//  Функция для проверки на четность
const isEven = (num) => { return num % 2 === 0; };

//  Функция для запуска игры
const playGame = () => {
  const userName = greetUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswersCount = 0;
  const roundsToWin = 3;

  //  Игра продолжается до тех пор, пока пользователь не ответит правильно 3 раза
  while (correctAnswersCount < roundsToWin) {
    const randomNumber = getRandomInt(1, 100);
    console.log(`Question: ${randomNumber}`);

    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    let correctAnswer;
    if (isEven(randomNumber)) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }

    const isCorrect = compareAnswers(userAnswer, correctAnswer, userName);
    if (isCorrect === true) {
      correctAnswersCount += 1;
    } else {
      return;
    }
  }

  // Если игрок ответил правильно 3 раза подряд
  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
