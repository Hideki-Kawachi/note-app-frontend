import React from "react";
import NavBar from "./components/navBar";

function App() {
	return (
		<div className="flex w-full h-full min-h-screen text-white">
			<NavBar></NavBar>
			<main className="w-full h-full bg-gray-500">
				<span>Hello2</span>
			</main>
		</div>
	);
}

export default App;
