import readlineSync from 'readline-sync';

const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  return userName;
};

//  Функция getRandomInt(min, max) - генерирует случайное целое число в диапазоне от min до max.
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export { greetUser, getRandomInt };
