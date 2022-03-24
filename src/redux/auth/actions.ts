import { UserData } from "./types";
import { setUserData } from "./reducer";
import { getUser } from "../../api/api";

export const login =
	({ login, password }: UserData) =>
	async (dispatch: any) => {
		const user = await getUser(login);

		if (user) {
			const userData = { id: user.id, login, password };
			dispatch(setUserData(userData, true));
		}
	};
