// src/Tiptap.jsx
import {
	useEditor,
	EditorContent,
	FloatingMenu,
	BubbleMenu,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";

// define your extension array
const extensions = [StarterKit];

function Tiptap({ content }) {
	const editor = useEditor({
		extensions,
		content,
	});

	return (
		<>
			<EditorContent editor={editor} />
			<FloatingMenu editor={editor}>This is the floating menu</FloatingMenu>
			<BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu>
		</>
	);
}

export default Tiptap;
