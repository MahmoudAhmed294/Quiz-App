import { useAppSelector } from "../store/hooks";
import { getCurrentQuestion, getQuestionCount } from "../store/questionsSlice";

const QuestionCounter = () => {
  const selectCurrentQuestion = useAppSelector(getCurrentQuestion);
  const selectQuestionCount = useAppSelector(getQuestionCount);
  return (
    <div>
      Question: {selectCurrentQuestion} / {selectQuestionCount}
    </div>
  );
};

export default QuestionCounter;
