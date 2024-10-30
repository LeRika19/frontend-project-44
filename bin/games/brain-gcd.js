#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greetUser from '../../src/cli.js';

// Функция для вычисления НОД
function gcd(a, b) {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  }
  
  // Основная функция игры
  function brainGcdGame() {
    const userName = greetUser();
    console.log('Find the greatest common divisor of given numbers.');
    
    let correctAnswers = 0;
    const rounds = 3;  // количество раундов для победы
    
    while (correctAnswers < rounds) {
      const num1 = Math.floor(Math.random() * 100) + 1;
      const num2 = Math.floor(Math.random() * 100) + 1;
      
      console.log(`Question: ${num1} ${num2}`);
      const userAnswer = readlineSync.question('Your answer: ');
      const correctAnswer = gcd(num1, num2);
      
      if (parseInt(userAnswer) === correctAnswer) {
        console.log('Correct!');
        correctAnswers += 1;
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${userName}!`);
        return;
      }
    }
    
    console.log(`Congratulations, ${userName}!`);
  }
  
  // Запуск игры
  brainGcdGame();