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
	.headingStyle {
		margin-bottom: 30px;
		padding-top: 45px;
	}
	.subHeadingStyle {
		text-align: center;
		padding: 0 314px;
		@media (max-width: 1024px) {
			padding: 0 45px;
		}
	}
	.imageStyle {
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
			<Heading content={heading} color="white" className="headingStyle" />
			<SubHeading
				content={subHeading}
				color="white"
				className="subHeadingStyle"
			/>
			<Image image={imageSrc} altText={altText} className="imageStyle" />
		</Wrapper>
	);
};

export default ExpressInstall;
