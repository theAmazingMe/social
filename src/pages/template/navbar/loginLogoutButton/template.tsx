import { Button, Nav } from "react-bootstrap";
import { LoginLogoutProps } from "../../../../resources/templateProps";

export const Template = ({isLogged,login,logout} : LoginLogoutProps) =>
	isLogged ? (
		<Button onClick={logout}>Logout</Button>
	) : (
		<Button onClick={login}>Login</Button>
	);
