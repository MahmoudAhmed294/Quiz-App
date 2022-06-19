import axios from "axios";

interface Questions {
  correctAnswer: string | number;
  id: string;
  incorrectAnswers: [];
  question: string;
}

export const Api: any = axios.get<Questions[]>(
  "https://the-trivia-api.com/api/questions"
);
