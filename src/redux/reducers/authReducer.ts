import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {postLogin, postRegister} from "../../services/authService"

interface IUserState extends IState {
	data: any[];
	isLogin: boolean;
}
const initialState: IUserState = {
	data: [],
	loading: true,
	isLogin: false,
}
export const login = createAsyncThunk(
	"auth/loginStatus",
	async (credential: ICredentials) => {
		const res = await postLogin(credential);
		return res.data;
	}
);
export const register = createAsyncThunk(
	"auth/registerStatus",
	async (data: IUser) => {
		const res = await postRegister(data);
		return res.data;
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
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(login.rejected, (state: any, action: any) => {
			state.data = [];
			state.loading = false;
			state.isLogin = false;
			localStorage.removeItem("accessToken");
		});
		builder.addCase(login.fulfilled, (state: any, action: any) => {
			state.data = action.payload;
			state.loading = false;
			state.isLogin = true;
			localStorage.setItem(
				"accessToken",
				action.payload?.token?.accessToken?.token
			);
			// console.log('Result: ', action.payload?.token?.accessToken?.token)
		});
		builder.addCase(register.rejected, (state: any, action: any) => {
			state.data = [];
			state.loading = false;
			state.isLogin = false;
			localStorage.removeItem("accessToken");
		})
		builder.addCase(register.fulfilled, (state: any, action: any) => {
			state.data = action.payload;
			state.loading = false;
			state.isLogin = true;
			localStorage.setItem(
				"accessToken",
				action.payload?.token?.accessToken?.token
			);
		})
		builder.addCase(logout.fulfilled, (state: any, action: any) => {
			state.data = action.payload;
			state.loading = false;
			state.isLogin = false;
			// 
		})
	}
});

export default authSlice.reducer;