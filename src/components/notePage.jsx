import React, { useEffect, useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import NavBar from "./navBar";
import NoteFilter from "./noteFilter";
import Tiptap from "./tiptap";
import { useCurrentEditor } from "@tiptap/react";

function NotePage() {
	const [noteContent, setNoteContent] = useState("");

	const params = useParams();
	function createNewNote() {
		console.log("CREATE NEW NOTE FOR:", params?.noteID);
	}

	useEffect(() => {
		console.log("NOTE:", noteContent);
	}, [noteContent]);

	return (
		<div className="flex flex-col w-full text-white bg-paper-texture">
			<div className="flex w-full">
				<NavBar></NavBar>
				<main className="flex flex-col w-full min-h-screen gap-4 bg-gray-500 md:p-8 bg-opacity-85 ">
					<div className="flex items-center justify-between w-full h-16 px-8 pt-4 overflow-visible md:p-0 ">
						<NoteFilter></NoteFilter>

						<button
							className="flex items-center gap-2 font-semibold text-green-300 transition-all bg-white rounded-full h-fit md:bg-green-300 md:text-white md:p-2 hover:scale-105"
							onClick={createNewNote}
						>
							<FaCirclePlus size={36} />
							<span className="hidden mr-2 md:block">Add Note</span>
						</button>
					</div>
					<hr></hr>
					<div>
						<span className="p-4 text-sm italic font-light md:p-0">
							*Changes are saved automatically
						</span>
						<div className="w-full mt-4">
							<Tiptap
								content={noteContent}
								setContent={setNoteContent}
							></Tiptap>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}

export default NotePage;
