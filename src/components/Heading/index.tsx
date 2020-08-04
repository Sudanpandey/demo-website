import React from "react";

import { HeadProps, HeaderProps } from "./types";
import { styled } from "theme";

const StyledHeader = styled.h1<HeadProps>`
	font-size: ${({ type }) => (type === "primary" ? "45px" : "35px")};
	font-weight: 700;
	line-height: 50px;  
	color: ${({
		color,
		theme: {
			colors: { blackColor, whiteColor },
		},
	}) => (color === "black" ? blackColor : whiteColor)};
`;

const Heading: React.FC<HeaderProps> = ({
	content,
	color = "black",
	type = "primary",
	className,
}) => (
	<StyledHeader color={color} type={type} className={className}>
		{content}
	</StyledHeader>
);

export default Heading;
