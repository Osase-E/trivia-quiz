import quizLogo from "../quiz-logo.png";

export default function Header({ children }) {
  return (
    <header>
      <img src={quizLogo} alt="Quiz logo" />
      <h1>React Quiz</h1>
    </header>
  );
}
