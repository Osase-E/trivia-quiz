import { useCallback, useRef, useState } from "react";
import CompletedQuiz from "./CompletedQuiz";

import AVAILABLE_QUESTIONS from "../../assets/questions.js";
import Question from "./Question.jsx";

const quizSize = AVAILABLE_QUESTIONS.length;

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  function handleSetAnswer(text) {
    setUserAnswers((prevAnswers) => [...prevAnswers, text]);
  }

  return (
    <div id="quiz">
      {quizSize !== userAnswers.length ? (
        <Question
          key={userAnswers.length}
          currentQuestion={userAnswers.length}
          setAnswer={handleSetAnswer}
        />
      ) : (
        <CompletedQuiz answers={userAnswers} />
      )}
    </div>
  );
}
