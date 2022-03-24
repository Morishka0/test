import { UserData } from "./types";
import { setUserToken, setUserData } from "./reducer";
import { getUser, loginUser } from "../../api/api";

export const login =
	({ login }: UserData) =>
	async (dispatch: any) => {
		const token = await loginUser(login);
		if (token.data) {
			localStorage.setItem("token", token.data);
			dispatch(setUserToken(token));
		}
	};

export const setAuthData = (token: string | null) => async (dispatch: any) => {
	const user = await getUser(token);
	console.log(user);

	dispatch(setUserData(user, true));
};
