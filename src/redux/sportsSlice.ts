import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

import envConfig from '../config/environments'

interface sportAction {
	key: string,
	active: boolean,
	group: string,
	details: string,
	title: string
}
interface sportDataAction {
	data: sportAction[] | any[],
	loading: boolean
}

const initialState: sportDataAction = {
	data: [],
	loading: false
}

export const fetchAll = createAsyncThunk(
	'sports/fetchAllStatus',
	async (_: void, { signal }) => {
		const source = axios.CancelToken.source()
		signal.addEventListener('abort', () => {
			source.cancel()
		})
		const res = await axios.get(`${envConfig.apiURL}/sports/?apiKey=${envConfig.apiKey}`, {
			cancelToken: source.token
		})
		
		return res.data
	}
 );

export const sportsSlice = createSlice({
	name: 'sports',
	initialState,
	reducers: {
		increment: (state) => {
			// 
		},
		decrement: (state) => {
			// 
		},
		incrementByAmount: (state, action) => {
			// 
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchAll.pending, (state) => {
			// 
		})
		builder.addCase(fetchAll.fulfilled, (state: any, action) => {
			state.data = action.payload;
			state.loading = false;
		})
		builder.addCase(fetchAll.rejected, (state: any, action) => {
			//
		})
	},
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = sportsSlice.actions

export default sportsSlice.reducer