import { useRef, useState } from "react";
import AVAILABLE_QUESTIONS from "../questions.js";

export default function Answers({
  selectedAnswer,
  question,
  onClick,
  answeredState,
}) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...AVAILABLE_QUESTIONS[question].answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((text) => {
        let cssClass = "";
        if (selectedAnswer.selectedAnswer === text) {
          cssClass = answeredState;
        }

        return (
          <li key={text} className="answer">
            <button
              className={cssClass}
              disabled={selectedAnswer.selectedAnswer === "" ? false : true}
              onClick={() => {
                onClick(text);
              }}
            >
              {text}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
