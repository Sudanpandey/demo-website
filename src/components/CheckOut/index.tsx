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
	@media (max-width: 1024px) {
	flex: 0 0 100%;
	width: 100%;
	max-width: 100%;	
	text-align: center;
	margin:0px;
	padding:0px;
		}
	.imageStyle {
		margin-bottom: 30px;
		@media (max-width: 1024px) {
			margin: 0px;
			padding: 0px;
			width: 600px;
			text-align: center;	
			align-items:center;
		}
		@media (max-width: 768px) {
			margin: 0px;
			padding: 0px;
			width: 300px;
			text-align: center;	
			align-items:center;
		}
	}
	.imageStyle1 {
		@media (max-width: 1024px) {
			margin: 0px;
			padding: 0px;
			text-align: center;	
		}
	}
	
`;

const InnerWrapper = styled.div`
	padding: 0px 80px;
	@media (max-width: 1024px) {
		padding: 30px 80px;
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
					className="imageStyle1"
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
				<Image image={checkOutImageSrc} altText={checkOutAltText} className="imageStyle" />
			</InnerWrapper>
		</Wrapper>
	);
};
export default CheckOut;
