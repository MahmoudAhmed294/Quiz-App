import { RootState, AppThunk } from './store';
import { Api } from '../api/questionsApi';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { stat } from 'fs';



export interface QuestionsState {
    value: [];
    status: 'idle' | 'loading' | 'failed';
    questionCount:number;
    score:number;
    currentQuestion:number
    IsQuizStart:boolean
    IsUserAnswered:boolean
  }
  const initialState: QuestionsState = {
    value: [],
    status: 'failed',
    questionCount:0,
    score:0,
    currentQuestion:1,
    IsQuizStart:false,
    IsUserAnswered:false,
  };
  export const getQuestionsAsync = createAsyncThunk(
    'questions/Api',
    async () => {
      const response = await Api;
      
      return response.data;
    }
  );
  
  export const questionsSlice = createSlice({
    name: 'questions',
    initialState,
    reducers:{
      isStart:(state: any)=>{
        state.IsQuizStart = true
      },
      currentQuestion:(state : any) =>{
        state.currentQuestion += 1
      },
      addScore:(state : any) =>{
        state.score += 1
      },
      IsUserAnswered:(state : any) =>{ 
        state.IsUserAnswered = !state.IsUserAnswered
      },
      newStart:(state : any)=>{ 
      return  initialState
      }

    },
    extraReducers: (builder) => {
        builder
        .addCase(getQuestionsAsync.pending ,(state )=>{
            state.status = 'loading';    
        })

        .addCase(getQuestionsAsync.fulfilled ,(state , action)=>{
            state.status = 'idle';
            state.value = action.payload;
            state.questionCount = state.value.length
            state.IsQuizStart = true
    
        })    
        .addCase(getQuestionsAsync.rejected ,(state )=>{
            state.status = 'failed';
    
        })    
    }
  })  

  export const selectQuestions = (state: RootState) => state.question.value ;
  export const IsQuizStart = (state: RootState) => state.question.IsQuizStart ;
  export const getScore = (state: RootState) => state.question.score  ;
  export const getCurrentQuestion = (state: RootState) => state.question.currentQuestion  ;
  export const getQuestionCount = (state: RootState) => state.question.questionCount  ;
  export const getStatus = (state: RootState) => state.question.status ;
  export const CheckIfUserAnswered = (state: RootState) => state.question.IsUserAnswered ;

  // actions
  export const { isStart ,addScore ,currentQuestion , IsUserAnswered ,newStart } = questionsSlice.actions;

  export default questionsSlice.reducer;
