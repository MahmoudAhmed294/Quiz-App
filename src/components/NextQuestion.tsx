import "../style/startButton.css";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  CheckIfUserAnswered,
  currentQuestion,
  getCurrentQuestion,
  getQuestionCount,
  IsUserAnswered,
} from "../store/questionsSlice";

const NextQuestion = () => {
  const isUserAnswered = useAppSelector(CheckIfUserAnswered);

  const dispatch = useAppDispatch();
  const questionsCount = useAppSelector(getQuestionCount);
  const numberOfCurrentQuestion = useAppSelector(getCurrentQuestion);
  const goToNextQuestion = () => {
    if (questionsCount !== numberOfCurrentQuestion) {
      dispatch(currentQuestion());
      if (isUserAnswered) {
        dispatch(IsUserAnswered());
      }
      document
        .querySelectorAll<any>(".answer_btn")
        .forEach((a) =>
          a.classList.remove("correct_answer", "incorrect_answer")
        );
    }
  };
  return (
    <>
      {isUserAnswered && questionsCount !== numberOfCurrentQuestion ? (
        <button
          className="start_Quiz-Btn"
          id="NextQuestionBtn"
          onClick={() => goToNextQuestion()}
        >
          Next Question
        </button>
      ) : (
        ""
      )}
    </>
  );
};

export default NextQuestion;
