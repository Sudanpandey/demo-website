import React from "react";
import { styled } from "theme";
import { FacebookChatItemsProps } from "./types";

import { SubHeading, Image } from "components";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;
const InnerWraper = styled.div`
	.iconStyle {
		margin-bottom: 15px;
	}
`;

const FacebookChatItem: React.FC<FacebookChatItemsProps> = ({
	subHeading,
	image: { imageSrc, altText },
	className,
}) => {
	return (
		<Wrapper className={className}>
			<InnerWraper>
				<Image
					image={imageSrc}
					altText={altText}
					className="iconStyle"
				/>
				<SubHeading content={subHeading} color="white" />
			</InnerWraper>
		</Wrapper>
	);
};
export default FacebookChatItem;
