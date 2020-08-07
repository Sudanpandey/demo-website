import React from "react";
import { styled } from "theme";
import { Heading, SubHeading, Image } from "components";
import { CheckOutProps } from "./types";

const Wrapper = styled.div`
	flex: 0 0 50%;
	max-width: 50%;
	text-align: center;
	background: #e64445;
	padding: 60px 0px 80px;
`;

const InnerWrapper = styled.div`
	padding: 0px 80px;

	.imageStyle {
		margin-bottom: 30px;
	}
	.headingStyle {
		margin-bottom: 27px;
	}
	.subHeadingStyle {
		margin-bottom: 50px;
	}
`;
const CheckOut: React.FC<CheckOutProps> = ({
	heading,
	subHeading: { top, bottom },
	image: { imageSrc, altText },
	checkOutImage: { imageSrc: checkOutImageSrc, altText: checkOutAltText },
}) => {
	return (
		<Wrapper>
			<InnerWrapper>
				<Image
					image={imageSrc}
					altText={altText}
					className="imageStyle"
				/>
				<Heading
					content={heading}
					color="white"
					className="headingStyle"
				/>
				<SubHeading content={top} color="white" />
				<SubHeading
					content={bottom}
					color="white"
					className="subHeadingStyle"
				/>
				<Image image={checkOutImageSrc} altText={checkOutAltText} />
			</InnerWrapper>
		</Wrapper>
	);
};
export default CheckOut;
