import { Card } from "react-bootstrap"
import {useForm} from "react-hook-form"
import { useDispatch } from "react-redux";

import { login } from "../../redux/reducers/authReducer";
import "./auth.css"

export default function LoginPage() {
	const {register, formState: {errors}, handleSubmit} = useForm();
	const dispatch = useDispatch();
	const handleLoginSubmit = handleSubmit((data: ICredentials) => {
		dispatch(login(data));
	});
	return (
		<div className="bg-dark d-flex justify-content-center h-screen">
			<Card body className="w-30 d-inline-block h-fit-content align-self-center">
				<form className="ml-3 mr-3 mb-5 mt-5" onSubmit={handleLoginSubmit}>
					<h3>Sign In</h3>
					<div className="form-group">
						<label>Email address</label>
						<input type="email" className="form-control" placeholder="Enter email" {...register("email", {
							required: {
								value: true,
								message: "The email field is required."
							}
						})}/>
						<span className="text-danger">{errors.email?.message}</span>
					</div>

					<div className="form-group">
						<label>Password</label>
						<input type="password" className="form-control" placeholder="Enter password" {...register("password", {
							required: {
								value: true,
								message: "The password field is required."
							}
						})} />
						<span className="text-danger">{errors.password?.message}</span>
					</div>

					<div className="form-group">
						<div className="custom-control custom-checkbox">
							<input type="checkbox" className="custom-control-input" id="customCheck1" />
							<label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
						</div>
					</div>

					<button type="submit" className="btn btn-primary btn-block">Submit</button>
					<div className="d-flex justify-content-center">
						If you yet don't have account, go to&nbsp;<a href=""> Register</a>
					</div>
				</form>
			</Card>
		</div>
	)
}