import React from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import {
  selectQuestions,
  getCurrentQuestion,
  addScore,
  CheckIfUserAnswered,
  IsUserAnswered,
} from "../store/questionsSlice";
import Answer from "./Answer";

interface Question {
  category: string;
  correctAnswer: string;
  difficulty: string;
  id: string;
  incorrectAnswers: [];
  question: string;
}

const AllAnswer = () => {
  const getQuestion = useAppSelector<Question[]>(selectQuestions);
  const CurrentQuestion = useAppSelector(getCurrentQuestion);
  const getCorrectAnswer = getQuestion[CurrentQuestion - 1].correctAnswer;
  const inCorrectAnswer = getQuestion[CurrentQuestion - 1].incorrectAnswers;
  const isUserAnswered = useAppSelector(CheckIfUserAnswered);
  const dispatch = useAppDispatch();
  const shuffleAnswers = React.useMemo(
    () =>
      [...inCorrectAnswer, getCorrectAnswer].sort(
        (a, b) => 0.5 - Math.random()
      ),
    [CurrentQuestion]
  );
  const checkAnswer = (e: any) => {
    const answer = e.target.innerText;

    if (answer === getCorrectAnswer) {
      e.target.classList.add("correct_answer");
      dispatch(addScore());
    } else {
      e.target.classList.add("incorrect_answer");
      document
        .getElementsByClassName("answer_btn")
        [shuffleAnswers.indexOf(getCorrectAnswer)].classList.add(
          "correct_answer"
        );
    }

    dispatch(IsUserAnswered());
  };

  return (
    <div>
      {shuffleAnswers.map((value, index) => (
        <Answer
          answer={value}
          key={index}
          checkAnswer={checkAnswer}
          isBtnDisabled={isUserAnswered}
        />
      ))}
    </div>
  );
};

export default AllAnswer;
