import React from "react";
import { styled } from "theme";
import { FacebookChatProps } from "./types";

import { Heading, SubHeading, FacebookChatItem, Image } from "components";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background: #002c4c url("/facebookcomponentbgimage.webp") 40% bottom
		no-repeat;
	padding: 60px 30px 0px 30px;   

	.imageStyle {
		display: block;
		height: 43px;
		margin: 0 auto 40px;
		width: 46px;
	}
	.headingStyle {
		font-weight: bold;
		text-align: center;
	}

	.headingBottomStyle {
		margin-bottom: 40px;
	}

	.messangerImageStyle {
		margin: 50px 0px 30px;
	}
	/* .mediaStyle{
		@media (max-width: 776px) {
			display:flex;
			flex-direction:column;
			align-items:center;
		}
	} */
`;
const InnerWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding:  0px 15px;
	@media (max-width: 767px) {
		flex-direction: column;
	}

	.itemStyle {
		flex: 0 0 33.3333333%;
		max-width: 33.333333%;
		text-align: center;
		padding-right: 15px;
		padding-left: 15px;
		@media (max-width: 767px) {
			flex: 0 0 100%;
			align-items: center;
			max-width: 100%;
			
		}
	}
`;

const FacebookChat: React.FC<FacebookChatProps> = ({
	heading: { top, bottom },
	image: { imageSrc, altText },
	messangerImage: { imageSrc: messengerImageSrc, altText: messengerAltText },
	chatImage: { imageSrc: chatImageSrc, altText: chatAltText },
	items,
}) => {
	return (
		<Wrapper>
			<Image image={imageSrc} altText={altText} className="imageStyle" />
			<Heading content={top} color="white" className="headingStyle" />
			<Heading
				content={bottom} 
				color="white"
				className="headingStyle headingBottomStyle"
			/>
			<InnerWrapper >
				{items.map(({ subHeading, image }) => (
					<FacebookChatItem
						key={subHeading}
						subHeading={subHeading}          
						image={image}
						className="itemStyle"
					/>
				))}
			</InnerWrapper>
			<Image  
				image={messengerImageSrc}
				altText={messengerAltText}
				className="messangerImageStyle"
			/>
			<Image image={chatImageSrc} altText={chatAltText} />
		</Wrapper>
	);
};
export default FacebookChat;
