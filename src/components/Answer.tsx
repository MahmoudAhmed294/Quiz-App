import "../style/answer.css";
type Props = {
  answer: string;
  checkAnswer: Function;
  isBtnDisabled: boolean;
};

const Answer = (props: Props) => {
  const { answer, checkAnswer, isBtnDisabled } = props;

  return (
    <button
      className="answer_btn"
      onClick={(e) => checkAnswer(e)}
      disabled={isBtnDisabled}
    >
      {answer}
    </button>
  );
};

export default Answer;
