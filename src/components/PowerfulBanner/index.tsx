import React from "react";
import { styled } from "theme";
import { PowerfulBannerProps } from "./types";

import { Heading, SubHeading, Image } from "components";

const Wrapper = styled.div`
	background: #00b0e1 url("/powerfulbannerbg.webp") right 0 no-repeat;
	padding-top: 60px;
	.iconStyle {
		margin-bottom: 40px;
	}
	.headingStyle {
		margin-bottom: 8px;
	}
	.SubHeadingStyle {
		margin-bottom: 45px;
	}
	.fastorImageStyle {
		max-width: 100%;
		border: 0;
		vertical-align: middle;
	}
`;
const InnerWrapper = styled.div`
	max-width: 75rem;
	width: 100%;
	padding-right: 15px;
	padding-left: 15px;
	margin-right: auto;
	margin-left: auto;
	text-align: center;
`;

const Htag = styled.h4`
	color: #dfff2b;
	display: inline-block;

	font-size: 30px;
	font-weight: 700;
	line-height: 50px;
	margin-top: 0;
	margin-bottom: 18px;
`;
const SpanWrapper=styled.div`
position: "relative";
`;

const Span = styled.span`
	position: absolute;
	right: 252px;
	text-align: left;
	top: -102px;
	transform: rotate(-18deg);
	color: #9ae9ff;
	display: block;
    font-style: normal;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-variant-numeric: normal;
    font-variant-east-asian: normal;
    font-weight: normal;
    font-stretch: normal;
    font-size: 23px;
    line-height: 23px;
    font-family: Caveat;  

`;

const PowerfulBanner: React.FC<PowerfulBannerProps> = ({
	heading,
	subHeading: { top, bottom },
	image: { imageSrc, altText },
	fastorImage: { imageSrc: fastorImageSrc, altText: fastorAltText },
}) => {
	return (
		<Wrapper>
			<InnerWrapper>
				<Image
					image={imageSrc}
					altText={altText}
					className="iconStyle"
				/>

				<Heading
					content={heading}
					color="white"
					className="headingStyle"
				/>
               <SpanWrapper>
				<div style={{ position: "relative" }}>
					<Span>
						Not only
						<br /> for banners
					</Span>
				</div>
                </SpanWrapper>

				<Htag>No coding skill required!</Htag>

				<SubHeading content={top} color="white" />
				<SubHeading
					content={bottom}
					color="white"
					className="SubHeadingStyle"
				/>

				<Image
					image={fastorImageSrc}
					altText={fastorAltText}
					className="fastorImageStyle"
				/>
			</InnerWrapper>
		</Wrapper>
	);
};
export default PowerfulBanner;
