import React, { FC } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./Header.scss";
import { useSelector } from "react-redux";

const Header: FC = () => {
	const auth = useSelector((state: any) => state.auth);

	return (
		<header className="header">
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						<Link className="header__link" to="">
							Test
						</Link>
					</Typography>
					{auth.isAuth ? (
						<Link className="header__link" to="/profile">
							<Button color="inherit">Profile</Button>
						</Link>
					) : (
						<Link className="header__link" to="/login">
							<Button color="inherit">Login</Button>
						</Link>
					)}
				</Toolbar>
			</AppBar>
		</header>
	);
};

export default Header;
