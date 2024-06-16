import React from "react";
import { NavLink } from "react-router-dom";

function NavCard({ text, link, color }) {
	return (
		<>
			<NavLink
				className={
					" transition-all hover:bg-gray-200 flex gap-4 py-4 px-8 items-center"
				}
				to={`${link}`}
			>
				<div
					className={`rounded-full h-3/4 aspect-square w-fit`}
					style={{ backgroundColor: color || "white" }}
				></div>
				<span className="text-ellipsis text-nowrap font-semibold">{text}</span>
				<span>{color}</span>
			</NavLink>
			<hr></hr>
		</>
	);
}

export default NavCard;
