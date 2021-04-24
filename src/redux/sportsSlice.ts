import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

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
const apiUrl: string = process.env.API_URL ?? 'https://api.the-odds-api.com/v3'
const apiKey: string = process.env.API_KEY ?? '96fa5083348843096f2965e94a96fc15'

export const fetchAll = createAsyncThunk(
	'sports/fetchAllStatus',
	async (_: void, { signal }) => {
		const source = axios.CancelToken.source()
		signal.addEventListener('abort', () => {
			source.cancel()
		})
		const res = await axios.get(`${apiUrl}/sports/?apiKey=${apiKey}`, {
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
			state
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