import React, { useEffect, useState } from "react";
import { FaChevronDown, FaCirclePlus } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import NavBar from "./navBar";
import NoteFilter from "./noteFilter";
import Tiptap from "./tiptap";
import { useCurrentEditor } from "@tiptap/react";

function NotePage() {
	const [noteContent, setNoteContent] = useState("");
	const [noteTitle, setNoteTitle] = useState("");
	const [showLabel, setShowLabel] = useState(false);
	const [selectedLabel, setSelectedLabel] = useState({});

	const params = useParams();
	function createNewNote() {
		console.log("CREATE NEW NOTE FOR:", params?.noteID);
	}

	useEffect(() => {
		console.log("NOTE:", noteContent);
	}, [noteContent]);

	function handleLabel(id, label, color) {
		console.log("HANDLE LABEL", id, label);
		setSelectedLabel({ id: id, label: label, color: color });
		setShowLabel(false);
	}

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
					<div className="flex flex-col gap-2">
						<input
							className="w-full px-4 py-2 text-xl bg-gray-400 rounded"
							required
							value={noteTitle}
							onChange={(e) => setNoteTitle(e.target.value)}
						></input>
						<div className="flex">
							<div className="flex gap-2 bg-gray-200 rounded w-fit">
								<button
									className={`flex items-center gap-2 px-2 py-1`}
									onClick={() => setShowLabel(!showLabel)}
								>
									<span>
										Label:{"  "}
										{selectedLabel?.label || ""}
									</span>
									<FaChevronDown
										size={16}
										className={`${
											showLabel ? "rotate-90" : "-rotate-90"
										} transition-all`}
									/>
								</button>
								<div
									className={`${
										!showLabel && "hidden"
									} flex  items-center w-max gap-1`}
								>
									<button
										className="h-full px-2 transition-all bg-red-300 border-gray-100 border-x hover:opacity-80"
										onClick={() => handleLabel(0, "Hello")}
									>
										<span>Hello</span>
									</button>
								</div>
							</div>
						</div>
						{/* <span className="p-4 text-sm italic font-light md:p-0">
							*Changes are saved automatically
						</span> */}
						<div className="w-full">
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
