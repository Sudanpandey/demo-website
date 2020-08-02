import React from "react";

import { styled } from "theme";
import { ExpressInstallProps } from "./types";
import { Heading, SubHeading, Image } from "components";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 510px;
	padding-top: 80px;
	background: #1a1a1a url("/fastor-express-install-bg.webp") 0 0 no-repeat;
	background-size: cover;
	.styledHeading {
		margin: 0px 0px 30px 0px;
		padding: 45px 0px 0px 0px;
		font-weight: 700;
		line-height: 50px;
	}
	.styleSubHeading {
		line-height: 28px;
		text-align: center;
		word-spacing: 0px;
		height: 56px;
		width: 1170px;
	}
	.styleImage {
		margin: -48px 0px;
	}
`;

const ExpressInstall: React.FC<ExpressInstallProps> = ({
	heading,
	subHeading,
	image: { imageSrc, altText },
}) => {
	return (
		<Wrapper>
			<Heading
				content={heading}
				color="white"
				className="styledHeading"
			/>
			<SubHeading
				content={subHeading}
				color="white"
				className="styleSubHeading"
			/>
			<Image image={imageSrc} altText={altText}  className="styleImage"/>
		</Wrapper>
	);
};

export default ExpressInstall;
