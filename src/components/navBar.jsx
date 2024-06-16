import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
	return (
		<div className="w-96 min-h-screen h-full bg-gray-400">
			<nav className="h-fit w-full sticky">
				<span className="px-2 py-4">Hideki Kawachi</span>
				<div className="flex flex-col gap-2">
					<hr></hr>
					<NavLink className={"p-2"} to={"/"}>
						<span className="text-ellipsis text-nowrap font-semibold">
							the quick brown fox jumps over the lazy dog
						</span>
					</NavLink>
					<hr></hr>
				</div>
			</nav>
		</div>
	);
}

export default NavBar;
