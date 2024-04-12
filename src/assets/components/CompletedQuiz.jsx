import SUMMARY_IMG from "../quiz-complete.png";
import AVAILABLE_QUESTIONS from "../../assets/questions.js";

export default function CompletedQuiz({ answers }) {
  const total = answers.length;
  let skipped = answers.filter((item) => item === null).length;
  let correct = answers.filter(
    (item, index) => item === AVAILABLE_QUESTIONS[index].answers[0]
  ).length;

  function calcShare(item, total) {
    return Math.round((100 * item) / total);
  }
  skipped = calcShare(skipped, total);
  correct = calcShare(correct, total);
  const wrong = 100 - skipped - correct;

  return (
    <div id="summary">
      <img src={SUMMARY_IMG} alt="trophy icon" />
      <h2>Quiz Done!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{correct}%</span>
          <span className="text">Correct</span>
        </p>
        <p>
          <span className="number">{skipped}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{wrong}%</span>
          <span className="text">Wrong</span>
        </p>
      </div>
      <ol>
        {answers.map((item, index) => {
          let cssClass = "";
          if (AVAILABLE_QUESTIONS[index].answers[0] === item) {
            cssClass = " correct";
          } else if (item === null) {
            cssClass = " skipped";
          } else {
            cssClass = " wrong";
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{AVAILABLE_QUESTIONS[index].text}</p>
              <p className={"user-answer" + cssClass}>
                {item ? item : "Skipped"}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
