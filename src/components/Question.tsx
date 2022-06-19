import { useAppSelector } from "../store/hooks";
import { getCurrentQuestion, selectQuestions } from "../store/questionsSlice";

const Question = () => {
  const selectCurrentQuestion = useAppSelector(getCurrentQuestion);
  const getQuestion = useAppSelector(selectQuestions);
  return (
    <>
      {getQuestion.map((i: any, index: number) => {
        return index === selectCurrentQuestion - 1 ? (
          <div> {i.question}</div>
        ) : (
          ""
        );
      })}
    </>
  );
};

export default Question;
