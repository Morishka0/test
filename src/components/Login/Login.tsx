import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, setAuthData } from "../../redux/auth/actions";
import LoginForm from "../LoginForm/LoginForm";
type FormValues = {
	id?: number;
	login: string;
	password: string;
};

const Login: FC = () => {
	const dispatch = useDispatch();
	const auth = useSelector((state: any) => state.auth);
	const navigate = useNavigate();

	useEffect(() => {
		if (auth.isAuth) {
			//return navigate("/profile");
		}
	}, [auth]);

	const onLoginFormSubmit = (values: FormValues) => {
		const data = values;
		dispatch(login(data));
		dispatch(setAuthData(localStorage.getItem("token")));
	};

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
