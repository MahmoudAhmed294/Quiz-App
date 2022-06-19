import Score from "./Score";
import "../style/allQuestions.css";
import Question from "./Question";
import AllAnswer from "./AllAnswer";
import NextQuestion from "./NextQuestion";
import QuestionCounter from "./QuestionCounter";

const AllQuestions = () => {
  return (
    <div className="allQuestions_container">
      <Score />
      <div className="allQuestions">
        <div>
          <QuestionCounter />
        </div>

        <h4>
          <Question />
        </h4>
        <div>
          <AllAnswer />
        </div>
      </div>
      <NextQuestion />
    </div>
  );
};

export default AllQuestions;
