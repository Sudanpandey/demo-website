export interface SubHeadProps {
	color?: "black" | "blackSecond"|"white";
	className?: string;
}

export interface SubHeaderProps extends SubHeadProps {
	content: string;
}

