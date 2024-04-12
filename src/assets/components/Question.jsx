import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer.jsx";
import AVAILABLE_QUESTIONS from "../../assets/questions.js";
import { useState } from "react";

export default function Question({ currentQuestion, setAnswer }) {
  const [selectedAnswer, setSelectedAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = 10000;

  if (selectedAnswer.selectedAnswer) {
    timer = 1000;
  }

  if (selectedAnswer.isCorrect !== null) {
    timer = 2000;
  }

  function handleOnClick(text) {
    setSelectedAnswer({ selectedAnswer: text, isCorrect: null });

    setTimeout(() => {
      const isCorrect =
        AVAILABLE_QUESTIONS[currentQuestion].answers[0] === text
          ? "correct"
          : "wrong";

      setSelectedAnswer({ selectedAnswer: text, isCorrect: isCorrect });

      setTimeout(() => {
        setAnswer(text);
      }, 2000);
    }, 1000);
  }

  function handleSkip() {
    setAnswer(null);
  }

  let answeredState = "";

  if (selectedAnswer.selectedAnswer && selectedAnswer.isCorrect !== null) {
    answeredState = selectedAnswer.isCorrect;
  } else if (
    selectedAnswer.selectedAnswer &&
    selectedAnswer.isCorrect === null
  ) {
    answeredState = "selected";
  }

  return (
    <div id="question">
      <QuestionTimer
        key={timer}
        timeout={timer}
        onTimeout={selectedAnswer.selectedAnswer === "" ? handleSkip : null}
        mode={answeredState}
      />
      <h2>{AVAILABLE_QUESTIONS[currentQuestion].text}</h2>
      <Answers
        selectedAnswer={selectedAnswer}
        answeredState={answeredState}
        question={currentQuestion}
        onClick={handleOnClick}
      />
    </div>
  );
}
