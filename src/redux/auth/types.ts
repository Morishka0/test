export type UserAuth = {
	id: number | null;
	login: string | null;
	password: string | null;
	isAuth: boolean | null;
};

export type UserData = {
	id: number;
	login: string;
	password: string;
};

export type AuthAction = {
	type: string;
	user: UserAuth;
};
