import { AuthAction, UserAuth, UserData } from "./types";
import { SET_USER_DATA } from "./constants";

const initialState: UserAuth = {
	id: null,
	login: null,
	password: null,
	isAuth: false,
};

type InitialState = typeof initialState;

const authReduser = (
	state: InitialState = initialState,
	{ type, isAuth, login, password, id }: any
) => {
	switch (type) {
		case SET_USER_DATA:
			return {
				...initialState,
				id,
				login,
				password,
				isAuth,
			};

		default:
			return state;
	}
};

export const setUserData = (
	{ id, login, password }: UserData,
	isAuth: boolean
) => ({
	type: SET_USER_DATA,
	id,
	login,
	password,
	isAuth,
});

export default authReduser;
