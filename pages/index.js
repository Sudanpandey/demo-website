import React from "react";
import styled from "styled-components";

const Heading = styled.h1`
	font-size: 40px;
	color: green;
`;

function HomePage() {
	return <Heading>Hello I am From Index page</Heading>;
}

export default HomePage;
