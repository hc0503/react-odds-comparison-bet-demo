import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import sportsSlice from './sportsSlice'
import oddsSlice from './oddsSlice'

const store = configureStore({
	reducer: {
	  sports: sportsSlice,
	  odds: oddsSlice
	},
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;