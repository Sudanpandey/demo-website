import React from "react";
import { styled } from "theme";
import { Heading, SubHeading, Image } from "components";
import { ProductDetailsItemProps } from "./types";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0px 80px;
	.imageStyle {
		margin-bottom: 30px;
	}
	.headerStyle {
		margin-bottom: 27px;
	}
	.subHeadingStyle {
		margin-bottom: 40px;
	}

`;

const ProductDetailsItem: React.FC<ProductDetailsItemProps> = ({
	heading,
	subHeading: { top, bottom },
	image: { imageSrc, altText },
	productDetailsItemImage: {
		imageSrc: productdetailsImageSrc,
		altText: productdetailsAltText,
	},
	className,
}) => {
	return (
		<Wrapper>
			<Image image={imageSrc} altText={altText} className="imageStyle" />
			<Heading content={heading} color="white" className="headerStyle" />
			<SubHeading content={top} color="white" />
			<SubHeading
				content={bottom}
				color="white"
				className="subHeadingStyle"
			/>
			<Image
				image={productdetailsImageSrc}
				altText={productdetailsAltText}
				className={className}
			/>
		</Wrapper>
	);
};
export default ProductDetailsItem;
