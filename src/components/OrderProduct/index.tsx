import React from "react";

import { styled } from "theme";
import { OrderProductProps } from "./types";
import { CheckOut, Notification } from "components";

const Wrapper = styled.div`
	display: flex;
	@media (max-width: 1024px) {
		margin:0;
		padding:0;
		 display:flex;
		 width:100%;
		 flex-direction:column;
		 align-items:center;
		}

`;

const OrderProduct: React.FC<OrderProductProps> = ({
	checkOutData,
	notificationData,
}) => {
	return (
		<Wrapper>
			<CheckOut {...checkOutData} />
			<Notification {...notificationData} />  
		</Wrapper>
	);
};
export default OrderProduct;
