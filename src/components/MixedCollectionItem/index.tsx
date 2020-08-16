import React from "react";

import { styled } from "theme";
import { MixedCollectionItemsProps } from "./types";
import { SubHeading, Image } from "components";

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	.imageStyle {
		text-align: center;
		padding-right: 20px;
		padding-bottom: 25px;
	}
	@media (max-width: 1024px) {
	}
`;
const InnerWrapper = styled.div<{ image: string }>`
	background-image: ${({ image }) => `url(${image})`};
	background-position: 0 8px;
	background-repeat: no-repeat;
	padding-left: 56px;
`;

const StyledSubHeading = styled.div`
	font-size: 15px;
	line-height: 22px;
	margin-top:2px;
	color:#666;
		/* color: ${({
			theme: {
				colors: { blackSecond },
			},
		}) => blackSecond}; */

`;

const MixedCollectionItem: React.FC<MixedCollectionItemsProps> = ({
	heading,
	image: { imageSrc, altText },
	subHeading,
	className,
}) => {
	return (
		<Wrapper className={className}>
			{/* <Image image={imageSrc} altText={altText} className="imageStyle" /> */}
			<InnerWrapper image={imageSrc}>
				<SubHeading content={heading} color="blackSecond" />
				<StyledSubHeading>{subHeading}</StyledSubHeading>
			</InnerWrapper>
		</Wrapper>
	);
};
export default MixedCollectionItem;
