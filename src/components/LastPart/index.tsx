import React from "react";
import { styled } from "theme";
import { Image } from "components";
import { LastPartProps } from "./types";

const Wrapper = styled.div`
	padding: 70px 0 164px;
	position: relative;
	text-align: center;
	z-index: -1;
	@media (max-width: 1028px) {
			display:none;
		}

	.imageStyle {
		max-width: 100%;
		border: 0;
		vertical-align: middle;
		text-align: center;

		
	}
	::before {
		left: -20%;
		background-image: url("/beforeimage.webp");
		height: 412px;
		/* left: 0; */
		width: 661px;
		background-position: 0 0;
		background-repeat: no-repeat;
		bottom: 0;
		content: "";
		position: absolute;
		z-index: -1;
	}
	::after {
		right: -20%;
		background-image: url("/afterimage.webp");
		height: 465px;
		right: 0;
		width: 330px;
		background-position: 0 0;
		background-repeat: no-repeat;
		bottom: 0;
		content: "";
		position: absolute;
		z-index: -1;
	}
`;

const InnerWrapper = styled.div`
	width: 100%;
	padding-right: 15px;
	padding-left: 15px;
	margin-right: auto;
	margin-left: auto;
	text-align: center;
	overflow: auto;
	/* background-size:cover;     */
`;

const Ptag = styled.p`
	display: block;
	margin-block-start: 1em;
	margin-block-end: 1em;
	margin-inline-start: 0px;
	margin-inline-end: 0px;
`;
const AnchorTag = styled.a`
	cursor: pointer;
	margin-top: 70px;
	display: inline-block;
	font-size: 18px;
	font-weight: 700;
	line-height: 1.5;
	/* margin: 0; */
	padding: 8px 20px;
	position: relative;
	text-align: center;
	text-decoration: none;
	width: 270px;
	border-radius: 4px;
	border: none;
	background-color: #82b440;
	color: #fff;
	box-shadow: 0 2px 0 #6f9a37;
	transition-duration: 0.25s;
	transition-property: color, background;
`;
const Svg = styled.svg`
	width: 24px;
	height: 24px;
	fill: currentColor;
	margin-right: 18px;
	position: relative;
	top: 2px;
	/* left: -20%; */
	color: #ffffff;
`;

const LastPart: React.FC<LastPartProps> = ({
	image: { imageSrc, altText },
}) => {
	return (
		<Wrapper>
			<InnerWrapper>
				<Image
					image={imageSrc}
					altText={altText}
					className="imageStyle"
				/>
				<Ptag>
					<AnchorTag href="https://themeforest.net/item/fastor-multipurpose-responsive-shopify-theme/18389593?ref=roartheme">
						<Svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 486.569 486.569"
						>
							<path d="M146.069,320.369h268.1c30.4,0,55.2-24.8,55.2-55.2v-112.8c0-0.1,0-0.3,0-0.4c0-0.3,0-0.5,0-0.8c0-0.2,0-0.4-0.1-0.6   c0-0.2-0.1-0.5-0.1-0.7s-0.1-0.4-0.1-0.6c-0.1-0.2-0.1-0.4-0.2-0.7c-0.1-0.2-0.1-0.4-0.2-0.6c-0.1-0.2-0.1-0.4-0.2-0.6   c-0.1-0.2-0.2-0.4-0.3-0.7c-0.1-0.2-0.2-0.4-0.3-0.5c-0.1-0.2-0.2-0.4-0.3-0.6c-0.1-0.2-0.2-0.3-0.3-0.5c-0.1-0.2-0.3-0.4-0.4-0.6   c-0.1-0.2-0.2-0.3-0.4-0.5c-0.1-0.2-0.3-0.3-0.4-0.5s-0.3-0.3-0.4-0.5s-0.3-0.3-0.4-0.4c-0.2-0.2-0.3-0.3-0.5-0.5   c-0.2-0.1-0.3-0.3-0.5-0.4c-0.2-0.1-0.4-0.3-0.6-0.4c-0.2-0.1-0.3-0.2-0.5-0.3s-0.4-0.2-0.6-0.4c-0.2-0.1-0.4-0.2-0.6-0.3   s-0.4-0.2-0.6-0.3s-0.4-0.2-0.6-0.3s-0.4-0.1-0.6-0.2c-0.2-0.1-0.5-0.2-0.7-0.2s-0.4-0.1-0.5-0.1c-0.3-0.1-0.5-0.1-0.8-0.1   c-0.1,0-0.2-0.1-0.4-0.1l-339.8-46.9v-47.4c0-0.5,0-1-0.1-1.4c0-0.1,0-0.2-0.1-0.4c0-0.3-0.1-0.6-0.1-0.9c-0.1-0.3-0.1-0.5-0.2-0.8   c0-0.2-0.1-0.3-0.1-0.5c-0.1-0.3-0.2-0.6-0.3-0.9c0-0.1-0.1-0.3-0.1-0.4c-0.1-0.3-0.2-0.5-0.4-0.8c-0.1-0.1-0.1-0.3-0.2-0.4   c-0.1-0.2-0.2-0.4-0.4-0.6c-0.1-0.2-0.2-0.3-0.3-0.5s-0.2-0.3-0.3-0.5s-0.3-0.4-0.4-0.6c-0.1-0.1-0.2-0.2-0.3-0.3   c-0.2-0.2-0.4-0.4-0.6-0.6c-0.1-0.1-0.2-0.2-0.3-0.3c-0.2-0.2-0.4-0.4-0.7-0.6c-0.1-0.1-0.3-0.2-0.4-0.3c-0.2-0.2-0.4-0.3-0.6-0.5   c-0.3-0.2-0.6-0.4-0.8-0.5c-0.1-0.1-0.2-0.1-0.3-0.2c-0.4-0.2-0.9-0.4-1.3-0.6l-73.7-31c-6.9-2.9-14.8,0.3-17.7,7.2   s0.3,14.8,7.2,17.7l65.4,27.6v61.2v9.7v74.4v66.5v84c0,28,21,51.2,48.1,54.7c-4.9,8.2-7.8,17.8-7.8,28c0,30.1,24.5,54.5,54.5,54.5   s54.5-24.5,54.5-54.5c0-10-2.7-19.5-7.5-27.5h121.4c-4.8,8.1-7.5,17.5-7.5,27.5c0,30.1,24.5,54.5,54.5,54.5s54.5-24.5,54.5-54.5   s-24.5-54.5-54.5-54.5h-255c-15.6,0-28.2-12.7-28.2-28.2v-36.6C126.069,317.569,135.769,320.369,146.069,320.369z M213.269,431.969   c0,15.2-12.4,27.5-27.5,27.5s-27.5-12.4-27.5-27.5s12.4-27.5,27.5-27.5S213.269,416.769,213.269,431.969z M428.669,431.969   c0,15.2-12.4,27.5-27.5,27.5s-27.5-12.4-27.5-27.5s12.4-27.5,27.5-27.5S428.669,416.769,428.669,431.969z M414.169,293.369h-268.1   c-15.6,0-28.2-12.7-28.2-28.2v-66.5v-74.4v-5l324.5,44.7v101.1C442.369,280.769,429.669,293.369,414.169,293.369z"></path>
						</Svg>
						Buy Fastor now
					</AnchorTag>
				</Ptag>
			</InnerWrapper>
		</Wrapper>
	);
};
export default LastPart;
