import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

import envConfig from '../config/environments'

const initialState: IoddDataAction = {
	data: [],
	loading: false
}

export const fetchAll = createAsyncThunk(
	'odds/fetchAllStatus',
	async (data: IoddParam, { signal }) => {
		const source = axios.CancelToken.source()
		signal.addEventListener('abort', () => {
			source.cancel()
		})
		const res = await axios.get(`${envConfig.apiURL}/odds/?apiKey=${envConfig.apiKey}&sport=${data.sport_key}&region=${data.region}&mkt=${data.mkt}`, {
			cancelToken: source.token
		})
		
		return res.data
	}
 )

export const oddsSlice = createSlice({
	name: 'odds',
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
export const { increment, decrement, incrementByAmount } = oddsSlice.actions

export default oddsSlice.reducer