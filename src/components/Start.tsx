import {useAppDispatch, useAppSelector  } from "../store/hooks";
import {  getQuestionsAsync, selectQuestions ,newStart  } from '../store/questionsSlice';
import  '../style/startButton.css'

const Start = () => {
  const dispatch = useAppDispatch()
  const getValueQuestions:any = useAppSelector(selectQuestions);

  const  getQuestion = () => {
    if(!getValueQuestions.length ){

      dispatch(getQuestionsAsync())
    }
    else{
      dispatch(newStart())
      dispatch(getQuestionsAsync())
      
    }
  }
  return (
    <div className="start_Btn_Container" >
        <button className="start_Quiz-Btn"  onClick={()=>getQuestion()}>Start</button>
    </div>
  )
}

export default Start

