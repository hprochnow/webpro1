const myQuiz = [
    { question: 'Who directed the movie The Shining?', answer: 'Stanley Kubrick' },
    { question: 'What year did the Wizard of Oz premiere?', answer: '1939' },
    { question: 'How many Academy Awards did Walt Disney win?', answer: 'Twenty-Two' }
  ];

  console.log(myQuiz);

  const randomQuestionIdx = myQuiz[Math.round(Math.random() * myQuiz.length)];
 
  const yourAnswer = prompt(randomQuestionIdx.question);
  
  alert("You answered " + yourAnswer + ". The correct answer was: " + randomQuestionIdx.answer);