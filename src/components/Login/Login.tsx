import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/actions";
import LoginForm from "../LoginForm/LoginForm";
type FormValues = {
	id?: number;
	login: string;
	password: string;
};

const Login: FC = () => {
	const dispatch = useDispatch();
	const auth = useSelector((state: any) => state.auth);
	const onLoginFormSubmit = (values: FormValues) => {
		const data = values;
		dispatch(login(data));
	};

	console.log(auth);

	return (
		<div className="login">
			<h2 className="title">Login</h2>
			<div className="login__form">
				<LoginForm onSubmit={onLoginFormSubmit} />
			</div>
		</div>
	);
};
export default Login;
