import { useQuiz } from "../QuizContext";

function Progress() {
  const { numQuestions, index, answer, maxPoints, points } = useQuiz();
  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={index + Number(answer !== null)}
      ></progress>
      <p>
        Question {index + 1} / {numQuestions}
      </p>
      <p>
        {points} / {maxPoints}
      </p>
    </header>
  );
}

export default Progress;
