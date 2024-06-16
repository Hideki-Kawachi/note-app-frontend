import React from "react";
import { Link } from "react-router-dom";

function NoteCard({
	id,
	title,
	content,
	category,
	label,
	createdAt,
	updatedAt,
}) {
	return (
		<Link
			className="w-full bg-gray-100 rounded-lg lg:h-80 shadow-white p-4 flex gap-2 flex-col text-start hover:scale-[1.02] transition-all"
			style={{ backgroundColor: label?.color || "gray" }}
			to={`/note/${id}`}
		>
			<span className="font-semibold text-xl w-fit">{title}</span>
			<p className="h-fit overflow-hidden line-clamp-[9]">{content}</p>
			<span className="ml-auto text-sm ">
				{createdAt.toLocaleDateString("en-US", {
					year: "numeric",
					month: "long",
					day: "numeric",
				})}
			</span>
		</Link>
	);
}

export default NoteCard;
