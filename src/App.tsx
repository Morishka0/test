import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";

const App: FC = () => {
	return (
		<div className="app">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/login" element={<Login />} />
					<Route path="/profile" element={<Profile />} />
				</Route>
			</Routes>
		</div>
	);
};

export default App;
