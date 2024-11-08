const compareAnswers = (userAnswer, correctAnswer, userName) => {
  let result;
  if (userAnswer === correctAnswer) {
      console.log('Correct!');
      result = true; 
  } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      result = false;
  }

  return result;
};

export default compareAnswers;