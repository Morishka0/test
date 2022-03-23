import { UserData } from "./types";
import { setUserData } from "./authReducer";

export const login = (userData: any) => (dispatch: any) => {
	dispatch(setUserData(userData, true));
};
