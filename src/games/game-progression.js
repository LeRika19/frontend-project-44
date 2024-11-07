#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { greetUser, getRandomInt } from '../../src/cli.js';
import compareAnswers from '../../src/index.js';

// Функция для генерации арифметической прогрессии
const generateProgression = () => {
    const start = getRandomInt(1, 10); // Начальное значение
    const step = getRandomInt(1, 10); // Шаг прогрессии
    const length = getRandomInt(5, 10); // Длина прогрессии (от 5 до 10)

    const progression = [];
    for (let i = 0; i < length; i++) {
        progression.push(start + i * step);
    }


    // Случайная позиция для замены числа
    const hiddenIndex = getRandomInt(0, length - 1);
    const hiddenValue = progression[hiddenIndex];
    progression[hiddenIndex] = '..'; // Заменяем на две точки
  

    return { progression, hiddenValue };
};

// Функция для игры
export const brainProgression = () => {
    const userName = greetUser();
    console.log("What number is missing in the progression?");

    let correctAnswersCount = 0;
    const roundsToWin = 3;

    while (correctAnswersCount < roundsToWin) {
        const { progression, hiddenValue: correctAnswer } = generateProgression();
        console.log(`Question: ${progression.join(' ')}`);

        let userAnswer = readlineSync.question('Your answer: ');
        userAnswer = parseInt(userAnswer);
        
        const isCorrect = compareAnswers(userAnswer, correctAnswer, userName);
        if (isCorrect === true) {
            correctAnswersCount += 1;
        } else {
            return;
        }
    }

    console.log(`Congratulations, ${userName}!`);
}
