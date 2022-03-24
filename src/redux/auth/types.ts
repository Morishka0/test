export type UserAuth = {
	id: number | null;
	login: string | null;
	password: string | null;
	token: string | null;
	isAuth: boolean | null;
};

export type UserData = {
	login: string;
	password: string;
};

export interface AuthUserData extends UserData {
	id: number;
}

export type AuthAction = {
	type: string;
	user: UserAuth;
};
