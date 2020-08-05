import React from "react";
import { styled } from "theme";
import { Heading, SubHeading, Image } from "components";
import { RevolutionSliderProps } from "./types";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background: #451919 url("/Revolutiionbgimage.webp") center bottom no-repeat;
	padding: 60px 0px 80px;
	.iconStyle {
		margin-bottom: 40px;
	}
	.headerStyle {
		margin-bottom: 30px;
	}
	.subHeadingStyle {
		margin-bottom: 40px;
	}
`;

const InnerWrapper = styled.div``;

const RevolutionSlider: React.FC<RevolutionSliderProps> = ({
	heading,
	subHeading: { top, bottom },
	image: { imageSrc, altText },
	revolutionImage: {
		imageSrc: revolutionImageSrc,
		altText: revolutionAltText,
	},
}) => {
	return (
		<Wrapper>
			<Image image={imageSrc} altText={altText} className="iconStyle" />
			<Heading content={heading} color="white" className="headerStyle" />
			<SubHeading
				content={top}   
				color="white"   
			/>
			<SubHeading
				content={bottom}
				color="white"
				className="subHeadingStyle"
			/>
			<Image image={revolutionImageSrc} altText={revolutionAltText} />
		</Wrapper>
	);
};
export default RevolutionSlider;
