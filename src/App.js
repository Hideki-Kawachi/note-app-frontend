import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";
import NotePage from "./components/notePage";

function App() {
	return (
		<Routes>
			<Route path="/:categoryID?" element={<Home></Home>}></Route>
			<Route path="/signIn" element={<SignIn></SignIn>}></Route>
			<Route path="/signUp" element={<SignUp></SignUp>}></Route>
			<Route path="/notes/:noteID" element={<NotePage></NotePage>}></Route>
		</Routes>
	);
}

export default App;
