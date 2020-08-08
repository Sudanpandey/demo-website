import React from "react";

import { styled } from "theme";
import { Heading, SubHeading, Image } from "components";

import { ProductPageLayoutProps } from "./types";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	background-color: #f2f2f2;
	margin-bottom: 2px;
	padding: 70px 0 20px;
	.headerStyle {
		margin-bottom: 30px;
	}
	.subHeadingStyle {
		margin-bottom: 34px;
	}
	.topImageStyle {
		vertical-align: middle;
	}
`;

const OuterWrapper = styled.div`
	width: 100%;
	max-width: 75rem;

	padding-right: 15px;
	padding-left: 15px;
	margin-right: auto;
	margin-left: auto;
`;

const ImageInnerWrapper = styled.div`
	display: flex;

	flex-wrap: wrap;
	margin-right: -15px;
	margin-left: -15px;
	justify-content: center;
`;

const InnerWrapper = styled.div`
	flex: 0 0 83.333333%;
	max-width: 83.333333%;
	width: 100%;

	padding-right: 15px;
	padding-left: 15px;
`;
const ContentWrapper = styled.div`

	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	margin-right: -15px;
	margin-left: -15px;
	@media (max-width: 767px) {
   display: block;
   
  }
`;
const ImageLabelWrapper = styled.div`
	margin-bottom: 50px;
	padding-right: 15px;
	padding-left: 15px;
	flex: 0 0 16.666667%;
	max-width: 16.666667%;
	.imageStyle {
		margin: 0 auto 15px;
		max-width: 100%;
		vertical-align: middle;
	}
`;

const Label = styled.span`
	display: flex;
	align-items: center;
	flex-direction: column;
	font-size: 15px;
	font-weight: 600;
	color: #250809;
`;
const ProductPageLayout: React.FC<ProductPageLayoutProps> = ({
	heading,
	subHeading,
	image: { imageSrc, altText },
	gridLayoutImages,
}) => {
	return (
		<Wrapper>
			<OuterWrapper>
				<Heading content={heading} className="headerStyle" />
				<SubHeading content={subHeading} className="subHeadingStyle " />
				<Image
					image={imageSrc}
					altText={altText}
					className="topImageStyle"
				/>
				<ImageInnerWrapper>
					<InnerWrapper>
						<ContentWrapper>
							{gridLayoutImages.map(
								({ image: { imageSrc, altText }, label }) => (
									<ImageLabelWrapper>
										<Image
											key={label}
											image={imageSrc}
											altText={altText}
											className="imageStyle"
										/>
										<Label>{label}</Label>
									</ImageLabelWrapper>
								)
							)}
						</ContentWrapper>
					</InnerWrapper>
				</ImageInnerWrapper>
			</OuterWrapper>
		</Wrapper>
	);
};
export default ProductPageLayout;
