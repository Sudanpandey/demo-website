import React from "react";
import { styled } from "theme";
import { Heading, SubHeading, Image } from "components";
import { NotificationProps } from "./types";

const Wrapper = styled.div`
	flex: 0 0 50%;
	max-width: 50%;
	text-align: center;
	background: #006ee9 url("/notificationComponentImage.webp") 34% bottom
		no-repeat;
	background-size: cover;
	padding: 60px 0px 80px;
	@media (max-width: 1024px) {
		flex: 0 0 100%;
		width: 100%;
		max-width: 100%;
		text-align: center;
	}
	.imageStyle {
		margin-bottom: 30px;
		text-align: center;
		align-items: center;

		@media (max-width: 1024px) {
			margin: 0px;
			padding: 0px;
			width: 400px;
			text-align: center;
			align-items: center;
		}
	}
`;
const InnerWrapper = styled.div`
	padding: 0px 80px;
	.headingStyle {
		margin-bottom: 27px;
		text-align: center;
	}
	.subHeadingStyle {
		margin-bottom: 50px;
		text-align: center;
	}
	.subHeading1Style {
		text-align: center;
	}
	.imageStyle {
		/* margin: 50px 0px -64px; */
	}
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Notification: React.FC<NotificationProps> = ({
	heading,
	subHeading: { top, bottom },
	image: { imageSrc, altText },
}) => {
	return (
		<Wrapper>
			<InnerWrapper>
				<Heading
					content={heading}
					color="white"
					className="headingStyle"
				/>
				<SubHeading
					content={top}
					color="white"
					className="subHeading1Style"
				/>
				<SubHeading
					content={bottom}
					color="white"
					className="subHeadingStyle"
				/>
				<Image
					image={imageSrc}
					altText={altText}
					className="imageStyle"
				/>
			</InnerWrapper>
		</Wrapper>
	);
};
export default Notification;
