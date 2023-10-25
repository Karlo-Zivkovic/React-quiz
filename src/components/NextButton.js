import { useQuiz } from "../QuizContext";

function NextButton() {
  const { dispatch, index, answer } = useQuiz();
  if (answer === null) return;
  if (index < 14)
    return (
      <button
        onClick={() => dispatch({ type: "nextQuestion" })}
        className="btn btn-ui"
      >
        Next
      </button>
    );
  if (index === 14)
    return (
      <button
        onClick={() => dispatch({ type: "finish" })}
        className="btn btn-ui"
      >
        Finish
      </button>
    );
}

export default NextButton;
