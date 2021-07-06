import { useRef } from "react";
import { Card } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import { register as registerReducer } from "../../redux/reducers/authReducer";
import "./auth.css"

export default function RegisterPage() {
	const history = useHistory();
	const {register, formState: {errors}, handleSubmit, watch} = useForm();
	const password = useRef({});
	password.current = watch("password", "");
	const dispatch = useDispatch();
	const isLogin: boolean = useSelector((state: any) => state.auth.isLogin);
	const handleRegisterSubmit = handleSubmit((data: IUser) => {
		dispatch(registerReducer(data));
		if (isLogin)
			history.push('/');
	});
	return (
		<div className="bg-dark d-flex justify-content-center h-screen">
			<Card body className="w-30 d-inline-block h-fit-content align-self-center">
				<form className="ml-3 mr-3 mb-5 mt-5" onSubmit={handleRegisterSubmit}>
					<h3>Sign Up</h3>
					<div className="form-group">
						<label>Name</label>
						<input className="form-control" placeholder="Enter name" {...register("name", {
							required: {
								value: true,
								message: "The name field is required."
							}
						})}/>
						<span className="text-danger">{errors.name?.message}</span>
					</div>

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
						<label>Confirm Password</label>
						<input type="password" className="form-control" placeholder="Enter confirm password" {...register("password_confirmation", {
							required: {
								value: true,
								message: "The password field is required."
							},
							validate: (value) => value === password.current || "The password doesn't match."
						})} />
						<span className="text-danger">{errors.password_confirmation?.message}</span>
					</div>

					<div className="form-group">
						<div className="custom-control custom-checkbox">
							<input type="checkbox" className="custom-control-input" id="customCheck1" />
							<label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
						</div>
					</div>

					<button type="submit" className="btn btn-primary btn-block">Register</button>
					<div className="d-flex justify-content-center mt-2">
						If you yet don't have account, go to&nbsp;<Link to="/auth/login"> Login</Link>
					</div>
				</form>
			</Card>
		</div>
	)
}