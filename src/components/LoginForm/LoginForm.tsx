import React, { FC } from "react";
import { useFormik } from "formik";
import { TextField, Button } from "@mui/material";
import "./LoginForm.scss";
type InitialValues = {
	login: string;
	password: string;
};

type PropsType = {
	onSubmit: (values: InitialValues) => any;
};

const LoginForm: FC<PropsType> = ({ onSubmit }) => {
	const initialValues: InitialValues = { login: "", password: "" };

	const formik = useFormik({ initialValues, onSubmit });
	return (
		<div className="login-form">
			<form className="login-form__form" onSubmit={formik.handleSubmit}>
				<TextField
					name="login"
					onChange={formik.handleChange}
					value={formik.values.login}
					label="Login"
					variant="outlined"
				/>
				<TextField
					name="password"
					onChange={formik.handleChange}
					value={formik.values.password}
					label="Password"
					variant="outlined"
					type="password"
				/>
				<Button type="submit" variant="contained">
					Login
				</Button>
			</form>
		</div>
	);
};
export default LoginForm;
