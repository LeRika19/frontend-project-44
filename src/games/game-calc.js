
import readlineSync from 'readline-sync';
import { greetUser, getRandomInt } from '../../src/cli.js';
import compareAnswers from '../../src/index.js';

//Функция generateExpression() - создаёт случайное математическое выражение. 
//Она выбирает случайные числа и операцию (+, -, *), затем вычисляет правильный ответ.
const generateExpression = () => {
    const num1 = getRandomInt(1, 50);
    const num2 = getRandomInt(1, 50);
    const operators = ['+', '-', '*'];
    const operator = operators[getRandomInt(0, operators.length - 1)];
    
    const correctAnswer = calculate(num1, num2, operator);

    return { expression: `${num1} ${operator} ${num2}`, correctAnswer };
}

const calculate = (number1, number2, oper) => {  
    
    let result;
    switch (oper) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
    }
    
    return result;
}


//Функция brainCalcGame():
//Выводит приветствие, запрашивает имя игрока и приветствует его.
//В цикле задаёт 3 вопроса. Если ответ верный, выводится "Correct!". 
//Если неверный — выводится правильный ответ и сообщение об окончании игры.
//Если все ответы верны, поздравляет пользователя с победой.
//Игра завершится, если игрок даст неверный ответ.
export const brainCalcGame = () => {
    const userName = greetUser();
    console.log('What is the result of the expression?');

    let correctAnswersCount = 0;
    const roundsToWin = 3;

    while (correctAnswersCount < roundsToWin) {
        let { expression, correctAnswer } = generateExpression();
        
        console.log(`Question: ${expression}`);
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