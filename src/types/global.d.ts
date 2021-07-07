interface ICredentials {
	email: string;
	password: string;
}
interface IState {
	isLoading: boolean;
	isSuccess: boolean;
	isError: boolean;
	errorMessage: any[];
}
interface IUser {
	name: string;
	email: string;
	password: string;
	password_confirmation?: string;
	createdAt?: Date;
	updatedAt?: Date;
}