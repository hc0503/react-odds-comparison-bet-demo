import { configureStore } from '@reduxjs/toolkit'
import sportsSlice from './sportsSlice'
import { useDispatch } from 'react-redux';

const store = configureStore({
	reducer: {
	  sports: sportsSlice,
	},
 });
 
 export type AppDispatch = typeof store.dispatch;
 export const useAppDispatch = () => useDispatch<AppDispatch>();
 
 export default store;