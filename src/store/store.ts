import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import questionsSlice from './questionsSlice';

export const store = configureStore({
  reducer: {
    question: questionsSlice,
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
