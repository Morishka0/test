import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { Container } from "@mui/material";
import "./Layout.scss";

const Layout: FC = () => {
	return (
		<div className="layout">
			<Header />
			<div className="page">
				<Container>
					<Outlet />
				</Container>
			</div>
		</div>
	);
};
export default Layout;
