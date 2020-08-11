import React from "react";
import { styled } from "theme";
import { MixedCollectionProps } from "./types";

import { MixedCollectionItem } from "components";

const Wrapper = styled.div`
	border-top:1px solid #F2F2F2;
    padding-top: 110px;
	text-align: left;

`;
const InnerWrapper = styled.div`
  max-width: 75rem;
  width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
`;
const NextWrapper=styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
	.itemStyle{
		font-weight:600;
		text-align:left;
	}

`;
const ItemWrapper =styled.div`
flex: 0 0 33.333333%;
    max-width: 33.333333%;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-bottom: 53px;
  

`;

const StyleSpan = styled.span`
	font-size: 18px;
	color: ${({
		theme: {
			colors: { blackSecond },
		},
	}) => blackSecond};
	margin-top: 50px;
	display: block;
	padding-bottom: 15px;
`;

const MixedCollection: React.FC<MixedCollectionProps> = ({ items }) => {
	return (
		<Wrapper>
			<InnerWrapper>
			<NextWrapper>
				{items.map(({ heading, subHeading, image }) => (
				<ItemWrapper>
				<MixedCollectionItem
						key={subHeading}
						image={image}
						heading={heading}
						subHeading={subHeading}
						className="itemStyle"
					/>
					</ItemWrapper>
				))}
				</NextWrapper>
			</InnerWrapper>
		</Wrapper>
	);
};
export default MixedCollection;
