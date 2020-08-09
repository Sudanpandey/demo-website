export interface HeadProps {
	color?: "black" | "blackSecond" |"white";
	type?: "primary" | "secondary";
	className?: string;
}

export interface HeaderProps extends HeadProps {
	content: string;
}
