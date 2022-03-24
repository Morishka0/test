import { UserData } from "./types";
import { setUserData } from "./reducer";
import { getUser } from "../../api/api";

export const login =
	({ login }: UserData) =>
	async (dispatch: any) => {
		const user = await getUser(login);

		if (user) {
			dispatch(setUserData(user, true));
		}
	};
