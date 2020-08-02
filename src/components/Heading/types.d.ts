export interface HeadProps {
	color?: "black" | "white";
	type?: "primary" | "secondary";
	className?: string;
}

export interface HeaderProps extends HeadProps {
	content: string;
}
