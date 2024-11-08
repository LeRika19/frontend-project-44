const compareAnswers = (userAnswer, correctAnswer, userName) => {
  if (userAnswer === correctAnswer) {
      console.log('Correct!'); 
  } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return false;
  }
};

export default compareAnswers;