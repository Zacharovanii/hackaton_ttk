declare module "@editorjs/link" {
	interface LinkToolConfig {
		endpoint?: string;
		headers?: Record<string, string>;
	}

	interface LinkToolData {
		link: string;
		meta: {
			title?: string;
			description?: string;
			image?: {
				url: string;
			};
		};
	}

	class LinkTool {
		constructor(config?: LinkToolConfig);
		render(): HTMLElement;
		save(): Promise<LinkToolData>;
		validate(data: LinkToolData): boolean;
	}

	export default LinkTool;
}

declare module "@editorjs/marker" {
	interface MarkerData {
		text: string;
	}

	class Marker {
		constructor();
		render(): HTMLElement;
		save(): Promise<MarkerData>;
		validate(data: MarkerData): boolean;
	}

	export default Marker;
}

declare module "@editorjs/warning" {
	interface WarningData {
		title: string;
		message: string;
	}

	class Warning {
		constructor();
		render(): HTMLElement;
		save(): Promise<WarningData>;
		validate(data: WarningData): boolean;
	}

	export default Warning;
}

declare module "@editorjs/code" {
	interface CodeData {
		code: string;
	}

	class Code {
		constructor();
		render(): HTMLElement;
		save(): Promise<CodeData>;
		validate(data: CodeData): boolean;
	}

	export default Code;
}

declare module "@editorjs/image" {
	interface ImageConfig {
		endpoints?: {
			byFile?: string;
			byUrl?: string;
		};
		field?: string;
		types?: string;
		additionalRequestData?: Record<string, any>;
		additionalRequestHeaders?: Record<string, string>;
	}

	interface ImageData {
		file?: {
			url: string;
		};
		url?: string;
		caption?: string;
		withBorder?: boolean;
		withBackground?: boolean;
		stretched?: boolean;
	}

	class Image {
		constructor(config?: ImageConfig);
		render(): HTMLElement;
		save(): Promise<ImageData>;
		validate(data: ImageData): boolean;
	}

	export default Image;
}

declare module "@editorjs/raw" {
	interface RawData {
		html: string;
	}

	class Raw {
		constructor();
		render(): HTMLElement;
		save(): Promise<RawData>;
		validate(data: RawData): boolean;
	}

	export default Raw;
}

declare module "@editorjs/header" {
	interface HeaderConfig {
		placeholder?: string;
		levels?: number[];
		defaultLevel?: number;
	}

	interface HeaderData {
		text: string;
		level: number;
	}

	class Header {
		constructor(config?: HeaderConfig);
		render(): HTMLElement;
		save(): Promise<HeaderData>;
		validate(data: HeaderData): boolean;
	}

	export default Header;
}

declare module "editorjs-html" {
	interface EditorJsHtml {
		parse(data: OutputData): string;
	}

	function EditorJsHtml(): EditorJsHtml;
	export default EditorJsHtml;
}

declare module "html-react-parser" {
	function parse(html: string): React.ReactNode;
	export default parse;
}
