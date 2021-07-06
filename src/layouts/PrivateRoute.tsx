import { Route, Redirect } from "react-router-dom"
import { useSelector } from "react-redux"

interface IProps {
	exact: boolean;
	path: string;
	component: React.ComponentType;
	key: number;
}
function PrivateRoute({ exact, path, component, key }: IProps) {
	const isLogin: boolean = useSelector((state: any) => state.auth.isLogin);
	return (
		isLogin ? (
			<Route
				exact={exact}
				path={path}
				component={component}
				key={key}
			/>
		) : (
			<Redirect to="/auth/login" />
		)

	);
}

export default PrivateRoute;