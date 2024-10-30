#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greetUser from '../../src/cli.js';

// Функция для генерации арифметической прогрессии
const generateProgression = () => {
    const start = Math.floor(Math.random() * 10); // Начальное значение
    const step = Math.floor(Math.random() * 5) + 1; // Шаг прогрессии
    const length = Math.floor(Math.random() * 6) + 5; // Длина прогрессии (от 5 до 10)

    const progression = [];
    for (let i = 0; i < length; i++) {
        progression.push(start + i * step);
    }

    // Случайная позиция для замены числа
    const hiddenIndex = Math.floor(Math.random() * length);
    const hiddenValue = progression[hiddenIndex];
    progression[hiddenIndex] = '..'; // Заменяем на две точки

    return { progression, hiddenValue };
};

// Функция для игры
function brainProgression() {
    const userName = greetUser();
    console.log("What number is missing in the progression?");

    for (let round = 0; round < 3; round++) {
        const { progression, hiddenValue } = generateProgression();
        console.log(`Question: ${progression.join(' ')}`);

        const answer = readlineSync.question('Your answer: ');

        if (parseInt(answer, 10) === hiddenValue) {
            console.log('Correct!');
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${hiddenValue}'.`);
            console.log(`Let's try again, ${userName}!`);
            return;
        }
    }

    console.log(`Congratulations, ${userName}!`);
};


// Запускаем игру
brainProgression();