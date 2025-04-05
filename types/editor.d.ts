declare module "@editorjs/checklist" {
	import { BlockTool, BlockToolData } from "@editorjs/editorjs";
	export default class Checklist implements BlockTool {
		constructor(options: any);
		render(): HTMLElement;
		save(block: HTMLElement): BlockToolData;
	}
}

declare module "@editorjs/code" {
	import { BlockTool, BlockToolData } from "@editorjs/editorjs";
	export default class Code implements BlockTool {
		constructor(options: any);
		render(): HTMLElement;
		save(block: HTMLElement): BlockToolData;
	}
}

declare module "@editorjs/delimiter" {
	import { BlockTool, BlockToolData } from "@editorjs/editorjs";
	export default class Delimiter implements BlockTool {
		constructor(options: any);
		render(): HTMLElement;
		save(block: HTMLElement): BlockToolData;
	}
}

declare module "@editorjs/embed" {
	import { BlockTool, BlockToolData } from "@editorjs/editorjs";
	export default class Embed implements BlockTool {
		constructor(options: any);
		render(): HTMLElement;
		save(block: HTMLElement): BlockToolData;
	}
}

declare module "@editorjs/inline-code" {
	import { InlineTool } from "@editorjs/editorjs";
	export default class InlineCode implements InlineTool {
		constructor(options: any);
		render(): HTMLElement;
		surround(range: Range): void;
		checkState(selection: Selection): boolean;
	}
}

declare module "@editorjs/table" {
	import { BlockTool, BlockToolData } from "@editorjs/editorjs";
	export default class Table implements BlockTool {
		constructor(options: any);
		render(): HTMLElement;
		save(block: HTMLElement): BlockToolData;
	}
}

declare module "@editorjs/simple-image" {
	import { BlockTool, BlockToolData } from "@editorjs/editorjs";
	export default class SimpleImage implements BlockTool {
		constructor(options: any);
		render(): HTMLElement;
		save(block: HTMLElement): BlockToolData;
	}
}

declare module "@editorjs/raw" {
	import { BlockTool, BlockToolData } from "@editorjs/editorjs";
	export default class Raw implements BlockTool {
		constructor(options: any);
		render(): HTMLElement;
		save(block: HTMLElement): BlockToolData;
	}
}
