import React from "react";
import { ImageProps } from "./types";
import { styled } from "theme";

const StyledImage = styled.img``;

const Image: React.FC<ImageProps> = ({ image, altText, className }) => (
	<StyledImage className={className} src={image} alt={altText} />
);
export default Image;
