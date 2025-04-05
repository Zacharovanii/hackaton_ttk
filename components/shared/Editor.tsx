"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect, useRef } from "react";
import { MenuBar } from "./editor-menubar";

interface EditorProps {
	onSave: (content: string) => void;
}

export function Editor({ onSave }: EditorProps) {
	const editor = useEditor({
		extensions: [StarterKit],
		content: "<p>Начните писать здесь...</p>",
		immediatelyRender: false,
	});

	const editorRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (editor && editorRef.current) {
			const updateHeight = () => {
				const editorElement = editorRef.current;
				if (editorElement) {
					const contentHeight = editorElement.scrollHeight;
					editorElement.style.height = `${contentHeight}px`;
				}
			};

			editor.on("update", updateHeight);
			updateHeight();

			return () => {
				editor.off("update", updateHeight);
			};
		}
	}, [editor]);

	return (
		<div className="border rounded-lg shadow-sm">
			<MenuBar editor={editor} onSave={onSave} />
			<div
				ref={editorRef}
				className="overflow-hidden transition-all duration-200"
			>
				<EditorContent
					editor={editor}
					className="prose max-w-none p-8 focus:outline-none
						[&_.ProseMirror]:min-h-[200px]
						[&_.ProseMirror]:p-4
						[&_h1]:text-4xl [&_h1]:font-bold [&_h1]:mb-4 [&_h1]:text-background-foreground
						[&_h2]:text-3xl [&_h2]:font-bold [&_h2]:mb-3 [&_h2]:text-background-foreground/90
						[&_h3]:text-2xl [&_h3]:font-bold [&_h3]:mb-2 [&_h3]:text-background-foreground/80
						[&_p]:text-background-foreground/70 [&_p]:mb-4
						[&_ul]:list-disc [&_ul]:ml-6 [&_ul]:mb-4
						[&_ol]:list-decimal [&_ol]:ml-6 [&_ol]:mb-4"
				/>
			</div>
		</div>
	);
}
