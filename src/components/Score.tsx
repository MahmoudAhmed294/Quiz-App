import { getScore } from "../store/questionsSlice";
import { useAppSelector } from "../store/hooks";
import "../style/score.css";
const Score = () => {
  const getSelectScore = useAppSelector(getScore);

  return <p className="score">Score: {getSelectScore}</p>;
};

export default Score;
