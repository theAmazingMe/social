import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/Firebase";

import "./style.scss"

export const Home = () => {

    const [user] = useAuthState(auth);
    const image = user?.photoURL || "assets/images/anonym-profile-picture.jpeg";

	return (
		<>
			<div>Home page</div>
            <p> welcome back {user?.displayName}</p>
            <img className="profile-picture" src={image}/>
		</>
	);
};
