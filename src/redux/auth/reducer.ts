import { AuthAction, UserAuth, UserData } from "./types";
import { SET_USER_DATA, SET_USER_TOKEN } from "./constants";

const initialState: UserAuth = {
	id: null,
	login: null,
	password: null,
	token: localStorage.getItem("token"),
	isAuth: false,
};

type InitialState = typeof initialState;

const authReduser = (
	state: InitialState = initialState,
	{ type, isAuth, login, password, id, token }: any
) => {
	switch (type) {
		case SET_USER_DATA:
			return {
				...state,
				id,
				login,
				password,
				isAuth,
			};
		case SET_USER_TOKEN:
			return {
				...state,
				token,
			};
		default:
			return state;
	}
};

export const setUserData = ({ id, login, password }: any, isAuth: boolean) => ({
	type: SET_USER_DATA,
	id,
	login,
	password,
	isAuth,
});

export const setUserToken = ({ token }: any) => ({
	type: SET_USER_TOKEN,
	token,
});

export default authReduser;
