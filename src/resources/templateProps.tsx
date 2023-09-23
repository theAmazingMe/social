export interface templateProps {
	handleNightSwitch: () => void;
	isDark: boolean;
}

export interface LoginLogoutProps {
	isLogged: boolean;
	login: () => void;
	logout: () => void;
}
