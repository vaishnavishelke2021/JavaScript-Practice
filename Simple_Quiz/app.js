const questions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "London", correct: false },
      { text: "Paris", correct: true },
      { text: "Rome", correct: false },
      { text: "Madrid", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Venus", correct: false },
    ],
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      { text: "Vincent van Gogh", correct: false },
      { text: "Leonardo da Vinci", correct: true },
      { text: "Pablo Picasso", correct: false },
      { text: "Michelangelo", correct: false },
    ],
  },
  {
    question: "Which country is famous for the Great Wall?",
    answers: [
      { text: "India", correct: false },
      { text: "China", correct: true },
      { text: "Egypt", correct: false },
      { text: "Greece", correct: false },
    ],
  },
  {
    question: "What is the largest mammal on Earth?",
    answers: [
      { text: "Elephant", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Lion", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for water?",
    answers: [
      { text: "Wa", correct: false },
      { text: "Hy", correct: false },
      { text: "W", correct: false },
      { text: "H2O", correct: true },
    ],
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    answers: [
      { text: "William Shakespeare", correct: true },
      { text: "Charles Dickens", correct: false },
      { text: "Jane Austen", correct: false },
      { text: "Mark Twain", correct: false },
    ],
  },
  {
    question: "What is the currency of Japan?",
    answers: [
      { text: "Yen", correct: true },
      { text: "Dollar", correct: false },
      { text: "Euro", correct: false },
      { text: "Pound", correct: false },
    ],
  },
  {
    question: "What is the tallest mountain in the world?",
    answers: [
      { text: "Mount Everest", correct: true },
      { text: "Mount Kilimanjaro", correct: false },
      { text: "Mount Fuji", correct: false },
      { text: "Mount McKinley", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Ag", correct: false },
      { text: "Ge", correct: false },
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for oxygen?",
    answers: [
      { text: "O2", correct: false },
      { text: "O", correct: true },
      { text: "H2O", correct: false },
      { text: "CO2", correct: false },
    ],
  },
  {
    question: "Who discovered penicillin?",
    answers: [
      { text: "Marie Curie", correct: false },
      { text: "Alexander Fleming", correct: true },
      { text: "Albert Einstein", correct: false },
      { text: "Isaac Newton", correct: false },
    ],
  },
  {
    question: "What is the largest ocean in the world?",
    answers: [
      { text: "Indian Ocean", correct: false },
      { text: "Atlantic Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
    ],
  },
  {
    question: "What is the tallest building in the world?",
    answers: [
      { text: "Burj Khalifa", correct: true },
      { text: "Shanghai Tower", correct: false },
      { text: "Abraj Al-Bait Clock Tower", correct: false },
      { text: "One World Trade Center", correct: false },
    ],
  },
  {
    question: "Who is known as the 'Father of Computers'?",
    answers: [
      { text: "Bill Gates", correct: false },
      { text: "Steve Jobs", correct: false },
      { text: "Charles Babbage", correct: true },
      { text: "Tim Berners-Lee", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for iron?",
    answers: [
      { text: "Fe", correct: true },
      { text: "Ir", correct: false },
      { text: "Au", correct: false },
      { text: "Pb", correct: false },
    ],
  },
  {
    question: "What is the smallest planet in our solar system?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Venus", correct: false },
      { text: "Mercury", correct: true },
      { text: "Mars", correct: false },
    ],
  },
  {
    question: "Who developed the theory of relativity?",
    answers: [
      { text: "Isaac Newton", correct: false },
      { text: "Albert Einstein", correct: true },
      { text: "Stephen Hawking", correct: false },
      { text: "Galileo Galilei", correct: false },
    ],
  },
  {
    question: "What is the largest organ in the human body?",
    answers: [
      { text: "Liver", correct: false },
      { text: "Brain", correct: false },
      { text: "Skin", correct: true },
      { text: "Heart", correct: false },
    ],
  },
  {
    question: "Which gas makes up the majority of Earth's atmosphere?",
    answers: [
      { text: "Nitrogen", correct: true },
      { text: "Oxygen", correct: false },
      { text: "Carbon Dioxide", correct: false },
      { text: "Helium", correct: false },
    ],
  },
];



document.addEventListener("DOMContentLoaded", function() {
    const questionElm = document.getElementById("question");
    const ansBtn = document.getElementById("ans-btns");
    const nextBtn = document.getElementById("next-btn");

    let currentQuestionIdx = 0;
    let score = 0;

    function startQuiz() {
        currentQuestionIdx = 0;
        score = 0;
        nextBtn.innerHTML = "Next";
        showQuestion();
    }

    function showQuestion() {
        resetState();
        let currentQuestion = questions[currentQuestionIdx];
        let questionNo = currentQuestionIdx + 1;
        questionElm.innerHTML = questionNo + "." + currentQuestion.question;

        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("opt");
            ansBtn.appendChild(button);
            if (answer.correct){
                button.dataset.correct = answer.correct;
            }
            
            button.addEventListener("click", selectAnswer);
        });
    }

    function resetState() {
        nextBtn.style.display = "none";
        while (ansBtn.firstChild) {
            ansBtn.removeChild(ansBtn.firstChild);
        }
    }

    function selectAnswer(e){
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === 'true';
        if(isCorrect){
            selectedBtn.classList.add('correct');
            score++;
              // questionElm.innerHTML = `${questionNo}.${currentQuestion.question}<br>Score: ${score}`
        }else{
            selectedBtn.classList.add('incorrect');
        }
        Array.from(ansBtn.children).forEach(button => {
            if(button.dataset.correct === 'true'){
                button.classList.add("correct");
            }
            button.disabled = true;
        });
        nextBtn.style.display = "block";
    }

    function showScore(){
        resetState();
        questionElm.innerHTML = `You scored ${score} out of ${questions.length}`; 
        nextBtn.innerHTML = "Play Again";
        nextBtn.style.display = "block";
    }

    function handleNextBtn(){
        currentQuestionIdx ++;
        if( currentQuestionIdx < questions.length){
            showQuestion();
        }else{
            showScore();
        }
    }

    nextBtn.addEventListener("click", ()=>{
        if(currentQuestionIdx < questions.length){
            handleNextBtn();
        }else{
            startQuiz();
        }
    })

    startQuiz();
});
 