import React from "react";
import { SubHeadProps, SubHeaderProps } from "./types";
import { styled } from "theme";

const StyledSubHeader = styled.h2<SubHeadProps>`
	font-size: 20px;
	font-weight: 500;
	line-height: 28px;
	color: ${({
		color,
		theme: {
			colors: { blackColor, blackSecond, whiteColor },
		},
	}) =>
		color === "black"
			? blackColor
			: color === "blackSecond"
			? blackSecond
			: whiteColor};
`;

const SubHeading: React.FC<SubHeaderProps> = ({
	content,
	color = "black",
	className,
}) => (
	<StyledSubHeader color={color} className={className}>
		{content}
	</StyledSubHeader>
);
export default SubHeading;
