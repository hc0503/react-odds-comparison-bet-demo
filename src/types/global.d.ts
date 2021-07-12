interface ICredentials {
	email: string;
	password: string;
}
interface IState {
	data: any;
	isLoading: boolean;
	isSuccess: boolean;
	isError: boolean;
	errorData: any;
}
interface IUser {
	name: string;
	email: string;
	password: string;
	password_confirmation?: string;
	createdAt?: Date;
	updatedAt?: Date;
}