import readlineSync from 'readline-sync';

export const greetUser = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
  
    return userName;
};
  
export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const compareAnswers = (userAnswer, correctAnswer, userName) => {
    let result;
    if (userAnswer == correctAnswer) {
      console.log('Correct!');
      result = true;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      result = false;
    }
  
    return result;
};

export const roundsToWinCount = 3;

