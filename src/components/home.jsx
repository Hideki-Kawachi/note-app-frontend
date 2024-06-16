import React from "react";
import NavBar from "./navBar";
import NoteFilter from "./noteFilter";
import NoteCard from "./noteCard";
import { FaCirclePlus } from "react-icons/fa6";
import { useParams } from "react-router-dom";

function Home() {
	const params = useParams();
	function createNewNote() {
		console.log("CREATE NEW NOTE FOR:", params?.categoryID);
	}

	return (
		<div className="flex flex-col w-full text-white">
			<div className="flex w-full bg-yellow-100">
				<NavBar></NavBar>
				<main className="w-full bg-gray-500 p-8 gap-4 flex flex-col min-h-screen">
					<div className="w-full overflow-visible h-16 flex justify-between items-center">
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
					<div className="z-0 h-fit grid lg:grid-cols-2 gap-4 sm:grid-cols-1 lg:p-6 xl:grid-cols-3">
						<NoteCard
							id={0}
							title={"Title"}
							content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel metus elementum, fermentum est a, pretium mi. Vestibulum neque tortor, vehicula vitae turpis ut, mattis auctor ipsum. Vestibulum mi augue, gravida condimentum leo ut, auctor pharetra risus. Donec ultricies urna quis massa vestibulum, ac efficitur nisl finibus. Integer auctor hendrerit lacus, eget hendrerit ex semper vel. Nulla sollicitudin, tortor ut imperdiet feugiat, risus est consequat eros, id egestas arcu ligula ac nisl. Praesent ultrices leo leo, sit amet convallis lectus mattis a. Pellentesque non ex a tortor consequat egestas. Donec vehicula felis non elit semper molestie.

Sed quis leo sed leo tincidunt rhoncus. Fusce in feugiat lorem, ac dignissim velit. Curabitur et odio aliquet, sodales nulla in, placerat quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean at tincidunt nulla. Aenean a tellus tortor. Maecenas nunc enim, semper eu dui et, faucibus feugiat elit. Fusce rhoncus nibh libero, in finibus ipsum semper vel. Integer condimentum viverra tincidunt. Phasellus in vehicula sapien, suscipit scelerisque erat. Nulla a porta nisi. Duis vehicula nisl sit amet tellus placerat vehicula. Proin feugiat mauris sit amet tristique accumsan. Etiam tristique feugiat lacus, in efficitur mi molestie nec. Vivamus ultrices, dui ac feugiat sollicitudin, tortor metus consectetur neque, interdum volutpat felis nisi nec nulla.

Nunc dignissim sapien et faucibus tempus. Pellentesque eget sapien luctus ipsum posuere auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis quis posuere neque. In nibh orci, interdum sit amet sapien eu, gravida suscipit lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget dictum justo, ut pellentesque leo.

Curabitur pellentesque nibh fermentum arcu faucibus, sit amet finibus risus tincidunt. Ut auctor metus malesuada metus pulvinar viverra. Proin sit amet elementum enim. Cras iaculis mattis dui eu tempus. Phasellus rutrum sodales lacus sit amet congue. Vivamus varius enim vitae sem ultricies, eget accumsan magna interdum. Sed nec egestas lacus.

Sed eget orci volutpat, blandit odio in, lacinia enim. Vestibulum viverra tempus pharetra. Quisque at risus ut metus volutpat pharetra eu eget metus. Morbi laoreet pretium enim sit amet rutrum. Etiam a ante arcu. Duis in odio vestibulum, interdum dui quis, lobortis purus. Nulla convallis eget magna nec sodales.`}
							category={{ id: 0, category: "School Notes" }}
							label={{ id: 1, label: "ISTREND", color: "#997a2b" }}
							createdAt={new Date()}
							updatedAt={new Date()}
						></NoteCard>
					</div>
				</main>
			</div>
		</div>
	);
}

export default Home;
