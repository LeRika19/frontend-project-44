import readlineSync from 'readline-sync';

const runGame = (description, rounds) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  for (const round of rounds) {
    console.log(`Question: ${round.question}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    if (userAnswer === round.answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${round.answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  };

  console.log(`Congratulations, ${userName}!`);
};
export default runGame;

export const roundsToWinCount = 3;
