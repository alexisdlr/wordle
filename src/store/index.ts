import { configureStore } from '@reduxjs/toolkit';

import gameSlice from '../store/game/slice'

const store = configureStore({
  reducer: gameSlice,
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;

export default store;