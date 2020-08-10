import React from "react";
import { styled } from "theme";
import { Heading, SubHeading, Image } from "components";
import { VariantSwatchesProps } from "./types";

const Wrapper = styled.div`
	display: flex;
	background: #ffffff;
	justify-content: space-around;
	padding: 50px 0px;
`;

const InnerWrapper = styled.div`
	flex: 0 0 41.666667%;
	max-width: 41.666667%;
	text-align: left;
	width: 100%;
	padding-right: 15px;
	padding-left: 15px;
	.headerStyle {
		font-size: 35px;
		line-height: 40px;
	}
`;
const OuterWrapper = styled.div`
	max-width: 75rem;
	width: 100%;

	padding-right: 15px;
	padding-left: 15px;
	margin-right: auto;
	margin-left: auto;
`;
const ContentWrapper = styled.div`
	align-items: center;
	display: flex;
	text-align: center;
	flex-wrap: wrap;
	margin-right: -15px;
	margin-left: -15px;
`;
const HeaderWrapper = styled.div`
	margin: 0 0 30px;
`;
const ImageWrapper = styled.div`
	flex: 0 0 58.333333%;
	max-width: 58.333333%;
	text-align: center;
	vertical-align: middle;
	width: 100%;
	padding-right: 15px;
	padding-left: 15px;
`;

const VariantSwatches: React.FC<VariantSwatchesProps> = ({
	heading: { top, bottom },
	subHeading,
	image: { imageSrc, altText },
}) => {
	return (
		<Wrapper>
			<OuterWrapper>
				<ContentWrapper>
					<InnerWrapper>
						<HeaderWrapper>
							<Heading
								content={top}
								color="blackSecond"
								className="headerStyle"
							/>
							<Heading
								content={bottom}
								color="blackSecond"
								className="headerStyle"
							/>
						</HeaderWrapper>
						<SubHeading content={subHeading} color="blackSecond" />
					</InnerWrapper>
					<ImageWrapper>
						<Image image={imageSrc} altText={altText} />
					</ImageWrapper>
				</ContentWrapper>
			</OuterWrapper>
		</Wrapper>
	);
};
export default VariantSwatches;
