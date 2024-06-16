import React from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import NavBar from "./navBar";
import NoteFilter from "./noteFilter";
import Tiptap from "./tiptap";

function NotePage() {
	const params = useParams();
	function createNewNote() {
		console.log("CREATE NEW NOTE FOR:", params?.noteID);
	}

	return (
		<div className="flex flex-col w-full text-white bg-paper-texture">
			<div className="flex w-full">
				<NavBar></NavBar>
				<main className="w-full bg-gray-500 p-8 gap-4 flex flex-col min-h-screen bg-opacity-85">
					<div className="w-full overflow-visible h-16 flex justify-between items-center">
						<NoteFilter></NoteFilter>
						<NoteFilter></NoteFilter>
						<button
							className=" rounded-full h-fit  font-semibold flex items-center gap-2 text-green-300 bg-white md:bg-green-300 md:text-white md:p-2 hover:scale-105 transition-all"
							onClick={createNewNote}
						>
							<FaCirclePlus size={36} />
							<span className="hidden md:block mr-2">Add Note</span>
						</button>
					</div>
					<hr></hr>
					<div>
						<span className="italic font-light text-sm">
							*Changes are saved automatically
						</span>
						<div className="w-1/2 h-1/2 bg-gray-100">
							<Tiptap content={`<p>Hello World</p>`}></Tiptap>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}

export default NotePage;
