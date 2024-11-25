import readlineSync from 'readline-sync';

export const roundsToWinCount = 3;

const runGame = (description, rounds) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  for (let i = 0; i < roundsToWinCount; i += 1) {
    console.log(`Question: ${rounds[i].question}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    if (userAnswer === rounds[i].answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rounds[i].answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }  
  }

  console.log(`Congratulations, ${userName}!`);
};
export default runGame;
