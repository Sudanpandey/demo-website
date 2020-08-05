import React from "react";

import { styled } from "theme";
import { MarketingAutomationItemsProps } from "./types";
import { SubHeading, Image } from "components";

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;

	.imageStyle {
		padding-right: 20px;
	}
`;
const InnerWrapper = styled.div``;

const StyledSubHeading = styled.span`
	display: block;
	font-size: 15px;
	line-height: 22px;
	color: rgba(255, 255, 255, 0.6);
`;

const MarketingAutomationItem: React.FC<MarketingAutomationItemsProps> = ({
	heading,
	subHeading,
	image: { imageSrc, altText },
	className,
}) => {
	return (
		<Wrapper className={className}>
			<Image image={imageSrc} altText={altText} className="imageStyle" />
			<InnerWrapper>
				<SubHeading content={heading} color="white" />
				<StyledSubHeading>{subHeading}</StyledSubHeading>
			</InnerWrapper>
		</Wrapper>
	);
};
export default MarketingAutomationItem;
