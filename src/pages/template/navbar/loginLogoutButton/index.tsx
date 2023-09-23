import { useNavigate } from "react-router-dom"
import { Template } from "./template"
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { auth } from "../../../../config/Firebase";

export const LoginLogout = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const login = () => {
        navigate("login")
    }

    const logout = async () => {
        await signOut(auth);
        navigate("/");
    }

    const isLogged = !! user 

    return <Template isLogged={isLogged} login={login} logout={logout} />
}