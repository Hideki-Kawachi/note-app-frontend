import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

function NoteFilter() {
	const [showDropdown, setShowDropdown] = useState(false);
	const [filter, setFilter] = useState("");

	useEffect(() => {
		setShowDropdown(false);
	}, [filter]);

	return (
		<>
			<div className="flex items-center justify-between gap-2 w-fit">
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
				className={`absolute top-24 z-40 flex flex-col bg-gray-200 w-fit h-fit transition-all capitalize rounded-lg text-lg text-white  ${
					!showDropdown && "hidden"
				}`}
			>
				<button
					className="px-4 py-2 capitalize hover:bg-gray-300 text-start"
					onClick={() => setFilter("All Notes")}
				>
					All Notes
				</button>
				<button
					className="px-4 py-2 capitalize hover:bg-gray-300 text-start"
					onClick={() => setFilter("School Notes")}
				>
					School Notes
				</button>
				<button
					className="px-4 py-2 capitalize hover:bg-gray-300 text-start"
					onClick={() => setFilter("Programming Notes")}
				>
					Programming Notes
				</button>
			</div>
		</>
	);
}

export default NoteFilter;
