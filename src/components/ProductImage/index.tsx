import React from "react";

import { styled } from "theme";
import { Heading, SubHeading, Image } from "components";

import { ProductImageProps } from "./types";

const Wrapper = styled.div`
	padding: 70px 0px 80px;
	text-align: center;	
	/* margin-right: -15px;
	margin-left: -15px; */
	background: #f2f2f2;
	.headerStyle {
		margin-bottom: 30px;
	}
	.subHeading {
		margin-bottom: 34px;
		@media (max-width: 1024px) {
			margin-bottom: 74px;
	}
	}
	@media (max-width: 1024px) {
		padding: 70px 0px 0px;	
	}
	
`;
const InnerWrapper = styled.div`
	margin: 0px 42px;
    max-width: 75rem;
	/* padding: 0px 15px; */

	.imageStyle {
		margin-bottom: 15px;
	}
`;
const ItemWrapper = styled.div`
	display: flex;
	flex-direction: row;
	/* padding-right: 15px;
	padding-left: 15px; */
	margin-right: -15px;
	margin-left: -15px;

	@media (min-width: 768px) {
		flex-wrap: wrap;
	}

	@media (max-width: 767px) {
		flex-direction: column;
		align-items: center;
	}
`;

const ImageWrapper = styled.div`
	margin-bottom: 50px;
	padding-right: 15px;
	padding-left: 15px;

	@media (max-width: 1024px) {
		flex: 0 0 49%;
		max-width: 49%;
		width: 100%;
		margin-bottom: 53px;
	}
`;

const ProductImage: React.FC<ProductImageProps> = ({
	heading,
	subHeading,
	productImages,
}) => {
	return (
		<Wrapper>
			<InnerWrapper>
				<Heading
					content={heading}
					color="blackSecond"
					className="headerStyle"
				/>
				<SubHeading
					content={subHeading}
					color="blackSecond"
					className="subHeading"
				/>
				<ItemWrapper>
					{productImages.map(({ image: { imageSrc, altText } }) => (
						<ImageWrapper>
							<Image
								key={imageSrc}
								image={imageSrc}
								altText={altText}
								className="imageStyle"
							/>
						</ImageWrapper>
					))}
				</ItemWrapper>
			</InnerWrapper>
		</Wrapper>
	);
};
export default ProductImage;
