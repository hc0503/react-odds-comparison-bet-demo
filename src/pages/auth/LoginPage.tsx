import { Card } from "react-bootstrap"
import "./auth.css"

export default function LoginPage() {
	return (
		<div className="bg-dark d-flex justify-content-center h-screen">
			<Card body className="w-30 d-inline-block h-fit-content align-self-center">
				<form className="ml-3 mr-3 mb-5 mt-5">
					<h3>Sign In</h3>
					<div className="form-group">
						<label>Email address</label>
						<input type="email" className="form-control" placeholder="Enter email" />
					</div>

					<div className="form-group">
						<label>Password</label>
						<input type="password" className="form-control" placeholder="Enter password" />
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