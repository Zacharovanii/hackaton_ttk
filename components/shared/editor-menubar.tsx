import {
	Bold,
	Italic,
	List,
	ListOrdered,
	Heading1,
	Heading2,
	Heading3,
	Save,
} from "lucide-react";

export const MenuBar = ({
	editor,
	onSave,
}: {
	editor: any;
	onSave: (content: string) => void;
}) => {
	if (!editor) {
		return null;
	}

	const handleSave = () => {
		const content = editor.getHTML();
		onSave(content);
	};

	return (
		<div className="flex gap-2 p-2 border-b bg-secondary">
			<button
				onClick={() => editor.chain().focus().toggleBold().run()}
				className={`p-2 rounded hover:bg-ring transition-colors ${
					editor.isActive("bold") ? "bg-ring/50" : ""
				}`}
			>
				<Bold size={16} />
			</button>
			<button
				onClick={() => editor.chain().focus().toggleItalic().run()}
				className={`p-2 rounded hover:bg-ring transition-colors ${
					editor.isActive("italic") ? "bg-ring/50" : ""
				}`}
			>
				<Italic size={16} />
			</button>
			<button
				onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
				className={`p-2 rounded hover:bg-ring transition-colors ${
					editor.isActive("heading", { level: 1 }) ? "bg-ring/50" : ""
				}`}
			>
				<Heading1 size={16} />
			</button>
			<button
				onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
				className={`p-2 rounded hover:bg-ring transition-colors ${
					editor.isActive("heading", { level: 2 }) ? "bg-ring/50" : ""
				}`}
			>
				<Heading2 size={16} />
			</button>
			<button
				onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
				className={`p-2 rounded hover:bg-ring transition-colors ${
					editor.isActive("heading", { level: 3 }) ? "bg-ring/50" : ""
				}`}
			>
				<Heading3 size={16} />
			</button>
			<button
				onClick={() => editor.chain().focus().toggleBulletList().run()}
				className={`p-2 rounded hover:bg-ring transition-colors ${
					editor.isActive("bulletList") ? "bg-ring/50" : ""
				}`}
			>
				<List size={16} />
			</button>
			<button
				onClick={() => editor.chain().focus().toggleOrderedList().run()}
				className={`p-2 rounded hover:bg-ring transition-colors ${
					editor.isActive("orderedList") ? "bg-ring/50" : ""
				}`}
			>
				<ListOrdered size={16} />
			</button>
			<div className="ml-auto">
				<button
					onClick={handleSave}
					className="p-2 rounded hover:bg-ring transition-colors bg-primary text-primary-foreground"
				>
					<Save size={16} />
				</button>
			</div>
		</div>
	);
};
