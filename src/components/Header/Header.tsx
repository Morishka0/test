import React, { FC } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header: FC = () => {
	return (
		<header className="header">
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						<Link className="header__link" to="">
							Test
						</Link>
					</Typography>
					<Link className="header__link" to="/login">
						<Button color="inherit">Login</Button>
					</Link>
				</Toolbar>
			</AppBar>
		</header>
	);
};

export default Header;
