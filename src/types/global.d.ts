interface ICredentials {
	email: string;
	password: string;
}
interface IState {
	loading: boolean
}
interface IUser {
	name: string;
	email: string;
	password: string;
	password_confirmation?: string;
	createdAt?: Date;
	updatedAt?: Date;
}