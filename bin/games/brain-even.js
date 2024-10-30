#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greetUser from '../../src/cli.js';

// Функция для проверки на четность
const isEven = (num) => num % 2 === 0;

// Функция для запуска игры
const playGame = () => {
  greetUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswers = 0;
  const roundsToWin = 3;

  // Игра продолжается до тех пор, пока пользователь не ответит правильно 3 раза
  while (correctAnswers < roundsToWin) {
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Генерируем случайное число от 1 до 100
    console.log(`Question: ${randomNumber}`);

    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    let correctAnswer;
    if (isEven(randomNumber)) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  // Если игрок ответил правильно 3 раза подряд
  console.log(`Congratulations, ${name}!`);
};

// Запускаем игру
playGame();