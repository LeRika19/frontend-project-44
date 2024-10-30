#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greetUser from '../../src/cli.js';

//Функция getRandomInt(min, max) - генерирует случайное целое число в диапазоне от min до max.
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Функция generateExpression() - создаёт случайное математическое выражение. 
//Она выбирает случайные числа и операцию (+, -, *), затем вычисляет правильный ответ.
function generateExpression() {
    const num1 = getRandomInt(1, 50);
    const num2 = getRandomInt(1, 50);
    const operators = ['+', '-', '*'];
    const operator = operators[getRandomInt(0, operators.length - 1)];
    
    let correctAnswer;
    switch (operator) {
        case '+':
            correctAnswer = num1 + num2;
            break;
        case '-':
            correctAnswer = num1 - num2;
            break;
        case '*':
            correctAnswer = num1 * num2;
            break;
    }
    return { expression: `${num1} ${operator} ${num2}`, correctAnswer };
}


//Функция brainCalcGame():
//Выводит приветствие, запрашивает имя игрока и приветствует его.
//В цикле задаёт 3 вопроса. Если ответ верный, выводится "Correct!". 
//Если неверный — выводится правильный ответ и сообщение об окончании игры.
//Если все ответы верны, поздравляет пользователя с победой.
//Игра завершится, если игрок даст неверный ответ.
function brainCalcGame() {
    const userName = greetUser();
    console.log('What is the result of the expression?');

    for (let round = 1; round <= 3; round++) {
        const { expression, correctAnswer } = generateExpression();
        console.log(`Question: ${expression}`);
        const userAnswer = readlineSync.question('Your answer: ');

        if (parseInt(userAnswer) === correctAnswer) {
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${userName}!`);
            return;
        }
    }
    console.log(`Congratulations, ${userName}!`);
}

// Запуск игры
brainCalcGame();