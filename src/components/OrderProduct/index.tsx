import React from "react";

import { styled } from "theme";
import { OrderProductProps } from "./types";
import { CheckOut, Notification } from "components";

const Wrapper = styled.div`
	display: flex;
	@media (max-width: 767px) {
		display: block;
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
