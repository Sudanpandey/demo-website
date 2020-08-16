import React from "react";
import { styled } from "theme";
import { Heading, SubHeading, Image, ProductDetailsItem } from "components";
import { ProductDetailsProps } from "./types";

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;	
	align-items: center;
	/* padding:60px 0px 50px; */
	background-size: coveer;
	
	@media (max-width: 1024px) {
		margin:0;
		padding:0;
		 display:flex;
		 flex-direction:column;
		 align-items:center;
		 
		}

`;

const ItemWrapper = styled.div<{ position: "left" | "right" }>`
	flex: 0 0 50%;
	max-width: 50%;
	text-align: center;
	background: ${({ position }) =>
		position === "left" ? "#333333" : "#39a6ae"};
	padding: 60px 0px 50px;

	.productDetailImageStyle {
		margin-bottom: 89px;
	}
	@media (max-width: 1024px) {
	flex: 0 0 100%;
	max-width: 100%;	
	width:100%;
	text-align: center;
	paddnig:0;
	margin:0;
		}
`;

const ProductDetails: React.FC<ProductDetailsProps> = ({
	productDetailsData,
}) => {
	return (
		<Wrapper>
			{productDetailsData.map((productDetail, index) => {
				return (
					<ItemWrapper position={index === 0 ? "left" : "right"}>
						<ProductDetailsItem 
							{...productDetail}
							className={index === 0 && "productDetailImageStyle"}
						/>
					</ItemWrapper>
				);
			})}
		</Wrapper>
	);
};
export default ProductDetails;
