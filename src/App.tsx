import "./App.css";
import {  CheckIfUserAnswered, getCurrentQuestion, getQuestionCount, getStatus } from "./store/questionsSlice";
import { useAppSelector } from "./store/hooks";
import StartBtn from "./components/Start";
import AllQuestions from "./components/AllQuestions";
import Loading from "./components/Loading";
function App() {
  const isStart_Selector = useAppSelector(getStatus);
  const questionsCount = useAppSelector(getQuestionCount)
  const numberOfCurrentQuestion = useAppSelector(getCurrentQuestion)
  const isUserAnswered = useAppSelector(CheckIfUserAnswered)

  
  return (
    <div className="app">
      <h1 className="appTitle">REACT QUIZ</h1>
     { ( questionsCount === numberOfCurrentQuestion && isUserAnswered) ||isStart_Selector === 'failed' ? <StartBtn /> : ''}
      {isStart_Selector === 'idle'  ? <AllQuestions /> :  isStart_Selector === 'loading' ? <Loading  /> :""} 
    </div>
  );
}

export default App;
