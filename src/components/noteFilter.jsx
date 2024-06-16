import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

function NoteFilter() {
	const [showDropdown, setShowDropdown] = useState(false);
	const [filter, setFilter] = useState("");

	useEffect(() => {
		console.log("FILTER:", filter);
		setShowDropdown(false);
	}, [filter]);

	return (
		<>
			<div className="flex justify-between items-center gap-2 w-fit">
				<span className="text-2xl font-bold capitalize">all notes</span>
				<button
					className={`cursor-pointer transition-all ${
						showDropdown && "rotate-180"
					}`}
					onClick={() => setShowDropdown(!showDropdown)}
				>
					<FaChevronDown size={24} />
				</button>
			</div>
			<div
				className={`fixed top-24 z-40 flex flex-col bg-gray-200 w-fit h-fit transition-all capitalize rounded-lg text-lg text-white  ${
					!showDropdown && "hidden"
				}`}
			>
				<button
					className="capitalize hover:bg-gray-300 text-start py-2 px-4"
					onClick={() => setFilter("All Notes")}
				>
					All Notes
				</button>
				<button
					className="capitalize hover:bg-gray-300 text-start py-2 px-4"
					onClick={() => setFilter("School Notes")}
				>
					School Notes
				</button>
				<button
					className="capitalize hover:bg-gray-300 text-start py-2 px-4"
					onClick={() => setFilter("Programming Notes")}
				>
					Programming Notes
				</button>
			</div>
		</>
	);
}

export default NoteFilter;
