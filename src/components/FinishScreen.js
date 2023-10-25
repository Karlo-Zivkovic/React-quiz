import { useQuiz } from "../QuizContext";

function FinishScreen() {
  const { maxPoints, points, dispatch, highscore } = useQuiz();
  const percentage = (points / maxPoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "😃";
  if (percentage >= 0 && percentage < 50) emoji = "😐";
  if (percentage === 0) emoji = "🤦‍♀️";
  return (
    <>
      <div className="result">
        <p>
          {emoji} You scored {points} out of {maxPoints} (
          {Math.floor(percentage)}
          %)
        </p>
      </div>
      <p className="highscore">(HighScore: {highscore} points)</p>
      <button
        onClick={() => dispatch({ type: "restart" })}
        className="btn btn-ui"
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
