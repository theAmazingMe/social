import { useContext } from "react";
import "./style.scss";
import { AppContext } from "../../App";
import { AppContextType } from "../../resources/types";
import { Button } from "react-bootstrap";
import { auth, provider } from "../../config/Firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Template = (props: any) => {
	const { theme } = useContext(AppContext) as AppContextType;

	const navigate = useNavigate()

	const signInWithGoolge = async () => {
		await signInWithPopup(auth, provider);
		navigate("/");
	};

	return (
		<div className={`feat-${theme}`}>
			<h3>Login page </h3>
			<p>Sign In with google to continue</p>
			<Button onClick={signInWithGoolge}>Sign in with Google</Button>
		</div>
	);
};
