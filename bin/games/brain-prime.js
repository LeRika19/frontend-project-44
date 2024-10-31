#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greetUser from '../../src/cli.js';

// Функция для проверки, является ли число простым
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Функция для запуска игры
function playPrimeGame() {
    const userName = greetUser();
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

    let score = 0;

    for (let i = 0; i < 3; i++) {
        const randomNumber = Math.floor(Math.random() * 100) + 1; // Генерируем случайное число от 1 до 100
        const correctAnswer = isPrime(randomNumber) ? "yes" : "no";
        const userAnswer = readlineSync.question(`Question: ${randomNumber}\nYour answer:`);

        if (userAnswer === correctAnswer) {
            console.log("Correct!");
            score++;
        } else {
            console.log(`Wrong! The correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${userName}!`);
        }
    }

    console.log(`Your score: ${score}/3`);
}

// Запускаем игру
playPrimeGame();