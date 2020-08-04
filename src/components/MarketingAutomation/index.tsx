import React from "react";
import { styled } from "theme";
import { MarketingAutomationProps } from "./types";
import { Heading, MarketingAutomationItem, Image } from "components";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 570px;
	padding-top: 60px;
	padding-bottom: 84px;
	background: #0a4dbd url("/fastor-weketing-bg.webp") right 0 no-repeat;
	background-size: cover;

	.topImageStyle {
		margin: 0px 427px 40px;
	}
	.headingStyle {
		text-align: center;
		padding: 0 250px;
		margin-bottom: 70px;
		@media (max-width: 1027px) {
			padding: 0 40px;
		}
		@media (max-width: 767px) {
			padding: 0 10px;
		}
	}
`;
const InnerWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 0px 50px;
	max-width: 83.333333%;
	@media (max-width: 767px) {
		flex-direction: column;
	}

	.itemStyle {
		flex: 0 0 50%;
		max-width: 50%;
		margin-bottom: 28px;
		@media (max-width: 767px) {
			flex: 0 0 100%;
			align-items: center;
			max-width: 100%;
		}
	}
`;

const StyleSpan = styled.span`
	font-size: 18px;
	color: #ffffff;
	margin-top: 50px;
	padding-bottom: 15px;
`;

const MarketingAutomation: React.FC<MarketingAutomationProps> = ({
	heading,
	image: { imageSrc, altText },
	items,
}) => {
	return (
		<Wrapper>
			<Image
				image={imageSrc}
				altText={altText}
				className="topImageStyle"
			/>
			<Heading content={heading} color="white" className="headingStyle" />
			<InnerWrapper>
				{items.map(({ heading, subHeading, image }) => (
					<MarketingAutomationItem
						key={heading}
						heading={heading}
						subHeading={subHeading}
						image={image}
						className="itemStyle"
					/>
				))}
			</InnerWrapper>
			<StyleSpan>...and much much more!</StyleSpan>
		</Wrapper>
	);
};
export default MarketingAutomation;
