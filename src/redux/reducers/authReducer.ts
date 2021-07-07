import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {postLogin, postRegister} from "../../services/authService"

interface IUserState extends IState {
	data: any[];
	isLogin: boolean;
}
const initialState: IUserState = {
	data: [],
	isLoading: true,
	isLogin: false,
	isError: false,
	isSuccess: false,
	errorMessage: []
}
export const login = createAsyncThunk(
	"auth/loginStatus",
	async (credential: ICredentials, thunkAPI) => {
		try {
			const res = await postLogin(credential);
			localStorage.setItem(
				"accessToken",
				res.data?.token?.accessToken?.token
			);
			return Promise.resolve(res.data);
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data.errors);
		}
	}
);
export const register = createAsyncThunk(
	"auth/registerStatus",
	async (data: IUser, thunkAPI) => {
		try {
			const res = await postRegister(data);
			localStorage.setItem(
				"accessToken",
				res.data?.token?.accessToken?.token
			);
			return Promise.resolve(res.data);
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data.errors);
		}
	}
)
export const logout = createAsyncThunk(
	"auth/logoutStatus",
	async () => {

	}
);
export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		clearState: (state) => {
			state.isError = false;
			state.isSuccess = false;
			state.isLoading = false;
			state.errorMessage = [];
			return state;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(login.rejected, (state: any, {payload}) => {
			state.data = [];
			state.loading = false;
			state.isError = true;
			state.errorMessage = payload;
			localStorage.removeItem("accessToken");
		});
		builder.addCase(login.fulfilled, (state: any, {payload}) => {
			state.data = payload;
			state.loading = false;
			state.isSuccess = true;
			state.isLogin = true;
			localStorage.setItem(
				"accessToken",
				payload?.token?.accessToken?.token
			);
		});
		builder.addCase(register.rejected, (state: any, {payload}) => {
			state.data = [];
			state.loading = false;
			state.isError = true;
			state.errorMessage = payload;
			localStorage.removeItem("accessToken");
		})
		builder.addCase(register.fulfilled, (state: any, {payload}) => {
			state.data = payload;
			state.loading = false;
			state.isSuccess = true;
			state.isLogin = true;
			localStorage.setItem(
				"accessToken",
				payload?.token?.accessToken?.token
			);
		})
		builder.addCase(logout.fulfilled, (state: any, {payload}) => {
			state.data = payload;
			state.loading = false;
			// 
		})
	}
});

export default authSlice.reducer;
export const { clearState } = authSlice.actions;
export const authSelector = (state: any) => state.auth;