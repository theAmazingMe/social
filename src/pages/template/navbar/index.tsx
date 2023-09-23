import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { NithModeSwitch } from "../nightModeSwitch";
import { AppContext } from "../../../App";
import { AppContextType } from "../../../resources/types";
import { auth } from "../../../config/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { LoginLogout } from "./loginLogoutButton";
import { NavItem } from "react-bootstrap";

export const NavBar = () => {
	const { theme } = useContext(AppContext) as AppContextType;
	const [user] = useAuthState(auth);

	return (
		<div>
			<Navbar bg={theme} data-bs-theme="dark">
				<Container fluid>
					<Navbar.Brand href="/home">My App</Navbar.Brand>
					<Nav className="me-auto my-2 my-lg-0">
						<Nav.Link as={Link} to="/">
							Home
						</Nav.Link>
					</Nav>
					<Nav className="with-spacer">
						<Navbar.Collapse className="justify-content-end with-spacer">
							<NavItem>
								<LoginLogout/>
							</NavItem>
							<Navbar.Text>
								&nbsp;
								<FontAwesomeIcon
									icon={icon({ name: "user", style: "solid" })}
								/>
								&nbsp;{user?.displayName}
							</Navbar.Text>
							<Navbar.Text>
								<NithModeSwitch />
							</Navbar.Text>
						</Navbar.Collapse>
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
};
