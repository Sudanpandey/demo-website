import React from "react";
import { styled } from "theme";
import { StarAlltimeProps } from "./types";

import { Heading, SubHeading, FacebookChatItem, Image } from "components";

const Wrapper = styled.div`
	background-color: #ffba5a;
	color: #fff;
	padding: 40px 0 77px;
	.imageStyle {
		@media (max-width: 1024px) {
			margin: 0px;
			padding: 0px;
			width: 300px;
			text-align: center;	
		}
	}
`;
const ImageWrapper = styled.div`
	max-width: 75rem;
	width: 100%;
    text-align:center;
	padding-right: 15px;
	padding-left: 15px;
	margin-right: auto;
	margin-left: auto;
`;
const NextImageWrapper=styled.div`
    background: url("/backgroundstaralltime.webp") center bottom no-repeat;
    height: 419px;
    margin-top: 75px;
`;

const StarAlltime: React.FC<StarAlltimeProps> = ({
	image: { imageSrc, altText },
}) => {
	return (
		<Wrapper>
            <ImageWrapper>
			<Image image={imageSrc} altText={altText} className="imageStyle" />
            </ImageWrapper>
            <NextImageWrapper>
            </NextImageWrapper>
        </Wrapper>
	);
};
export default StarAlltime;
