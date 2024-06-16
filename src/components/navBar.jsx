import React from "react";
import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import NavCard from "./navCard";

function NavBar() {
	return (
		<nav className={`lg:w-96 bg-gray-400 bg-opacity-90 hidden md:block`}>
			<div className="flex gap-4 w-fit items-center mx-4 my-6">
				<img
					className="object-contain rounded-full h-16 aspect-square bg-gray-100"
					alt="profile"
				></img>
				<span className="font-semibold">Hideki Kawachi</span>
			</div>

			<div className="flex flex-col h-screen overflow-y-auto">
				<hr></hr>
				<NavLink
					className={
						" transition-all hover:bg-gray-200 flex gap-4 py-4 px-8 items-center"
					}
					to={`/`}
				>
					<FaHome />
					<span className="font-semibold">Home</span>
				</NavLink>
				<hr></hr>
				<NavCard text={"Important"} link={"/"} color={"red"}></NavCard>
			</div>
		</nav>
	);
}

export default NavBar;
