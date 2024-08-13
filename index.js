const quizData = {
  questions: [
    {
      question: "What is OORT's product tagline?",
      options: [
        "AI for Everyone",
        "Cloud for Decentralized AI",
        "Blockchain-Powered Computing",
        "Trustworthy AI Platform",
      ],
      correctAnswer: "Cloud for Decentralized AI",
    },
    {
      question: "Which of the following is NOT one of OORT's three pillars?",
      options: ["Affordable", "Trusted", "Community Driven", "Centralized"],
      correctAnswer: "Centralized",
    },
    {
      question: "What is OORT's proprietary algorithm called?",
      options: [
        "Proof of Work",
        "Proof of Stake",
        "Proof of Honesty",
        "Proof of Authority",
      ],
      correctAnswer: "Proof of Honesty",
    },
    {
      question: "Which of the following is NOT a product offered by OORT?",
      options: ["OORT DataHub", "OORT Storage", "OORT Compute", "OORT Network"],
      correctAnswer: "OORT Network",
    },
    {
      question: "What is the name of OORT's layer-1 blockchain?",
      options: [
        "OORT Chain",
        "Olympus Protocol",
        "Decentralized AI Chain",
        "Trustworthy Blockchain",
      ],
      correctAnswer: "Olympus Protocol",
    },
    {
      question:
        "How much can users save by utilizing OORT's optimized infrastructure resources?",
      options: ["Up to 50%", "Up to 60%", "Up to 70%", "Up to 80%"],
      correctAnswer: "Up to 80%",
    },
    {
      question: "What is the name of OORT's custom-designed edge node device?",
      options: ["Apollo", "Artemis", "Deimos", "Phobos"],
      correctAnswer: "Deimos",
    },
    {
      question: "Which of the following is NOT a way OORT generates revenue?",
      options: [
        "Service Fees",
        "Protocol Fees",
        "Licensing Fees",
        "Subscription Fees",
      ],
      correctAnswer: "Subscription Fees",
    },
    {
      question:
        "What is the annual licensing fee for each custom-designed edge node?",
      options: ["$30", "$45", "$60", "$75"],
      correctAnswer: "$60",
    },
    {
      question:
        "Which OORT product is designed for crafting generative AI agents?",
      options: ["OORT DataHub", "OORT Storage", "OORT Compute", "OORT AI"],
      correctAnswer: "OORT AI",
    },
    {
      question: "What is OORT's slogan?",
      options: [
        "Where AI Meets Decentralization",
        "Beyond the Cloud, Into the OORT",
        "OORT: Where the Solar System Ends, Decentralized AI Begins",
        "Decentralized Computing for a Trusted Future",
      ],
      correctAnswer:
        "OORT: Where the Solar System Ends, Decentralized AI Begins",
    },
    {
      question:
        "Which of the following is NOT mentioned as a target audience for OORT?",
      options: [
        "AI Developers & researchers",
        "Data contributors and edge device owners",
        "Government agencies",
        "Companies aiming to improve automation and operational efficiency",
      ],
      correctAnswer: "Government agencies",
    },
    {
      question:
        "What key challenge is OORT addressing in centralized AI systems?",
      options: [
        "Slow processing speeds",
        "Limited storage capacity",
        "Lack of trust and privacy concerns",
        "High energy consumption",
      ],
      correctAnswer: "Lack of trust and privacy concerns",
    },
    {
      question: "When is OORT Compute scheduled to launch?",
      options: ["2023", "2024", "2025", "Already launched"],
      correctAnswer: "2024",
    },
    {
      question: "What was OORT AI previously known as?",
      options: [
        "OORT Intelligence",
        "OORT TDS",
        "OORT Cognitive",
        "OORT Assistant",
      ],
      correctAnswer: "OORT TDS",
    },
    {
      question:
        "Which of the following is NOT mentioned as a partnership/client of OORT?",
      options: ["DELL Technologies", "Tencent Cloud", "Seagate", "Microsoft"],
      correctAnswer: "Microsoft",
    },
    {
      question: "What does OORT's DataHub primarily focus on?",
      options: [
        "Data storage",
        "Data computation",
        "Community-driven data generation and preprocessing",
        "Data encryption",
      ],
      correctAnswer: "Community-driven data generation and preprocessing",
    },
    {
      question: "How does OORT ensure trust in the AI development process?",
      options: [
        "By using centralized servers",
        "Through manual verification",
        "By recording every step of the AI lifecycle on the blockchain",
        "By limiting access to authorized personnel only",
      ],
      correctAnswer:
        "By recording every step of the AI lifecycle on the blockchain",
    },
    {
      question:
        "What is one of the key benefits of OORT's decentralized approach to cloud computing?",
      options: [
        "Faster processing speeds",
        "Lower energy consumption",
        "Enhanced privacy and security",
        "Simplified user interface",
      ],
      correctAnswer: "Enhanced privacy and security",
    },
    {
      question: "How does OORT aim to create a more equitable future for AGI?",
      options: [
        "By making AI development exclusive to large corporations",
        "By harnessing the power of decentralized networks",
        "By limiting access to AI technologies",
        "By focusing solely on developed countries",
      ],
      correctAnswer: "By harnessing the power of decentralized networks",
    },
  ],
};

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

function loadQuestion() {
  const question = quizData.questions[currentQuestion];
  questionEl.textContent = question.question;

  optionsEl.innerHTML = "";
  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option");
    button.addEventListener("click", () =>
      selectOption(button, index, question.correctAnswer)
    );
    optionsEl.appendChild(button);
  });

  nextBtn.style.display = "none";
  resultEl.textContent = "";
}

function selectOption(selectedButton, optionIndex, correctAnswer) {
  const buttons = optionsEl.getElementsByClassName("option");
  for (let button of buttons) {
    button.disabled = true;
    if (button.textContent === correctAnswer) {
      button.classList.add("correct");
    }
  }

  if (selectedButton.textContent === correctAnswer) {
    score++;
    resultEl.textContent = "Correct!";
  } else {
    selectedButton.classList.add("incorrect");
    resultEl.textContent = "Incorrect. The correct answer is: " + correctAnswer;
  }

  nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.questions.length) {
    loadQuestion();
  } else {
    showFinalResult();
  }
});

function showFinalResult() {
  questionEl.textContent = "Quiz Completed!";
  optionsEl.innerHTML = "";
  nextBtn.style.display = "none";
  resultEl.textContent = `Your final score is: ${score} out of ${quizData.questions.length}`;

  // Add restart button
  const restartBtn = document.createElement("button");
  restartBtn.textContent = "Restart Quiz";
  restartBtn.addEventListener("click", restartQuiz);
  optionsEl.appendChild(restartBtn);
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  loadQuestion();
}

loadQuestion();
