import React, { useState } from "react";
import { FC } from "react";
import { NavBarProps } from "./types";
import { styled } from "theme";

const Wrapper = styled.div`
  position: fixed;
  display: flex !important;
  justify-content: space-around;
  font-weight: 400;
  width: 100%;
  line-height: 28px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  background-color: ${({
		theme: {
			colors: { navbarColor },
		},
  }) => navbarColor};

  @media (max-width: 767px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    position: relative;
	height: 50px;
  }
`;

const MoreWrapper = styled.div`
	display: block;
	cursor: pointer;
	width: 17px;
	height: 17px;
	position: relative;
	color: ${({
		theme: {
			colors: { whiteColor },
		},
	}) => whiteColor};
	@media (min-width: 767px) {
		display: none;
	}

	.burgerTop {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		border-top: 3px solid;
	}
	.burgerMiddle {
		position: absolute;
		top: 7px;
		left: 0;
		width: 100%;
		border-top: 3px solid;
	}
	.burgerButtom {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		border-top: 3px solid;
	}
`;
const InnerWrapper = styled.div`
	position: relative;
`;

const StyledUnorderedList = styled.ul<{ open: boolean }>`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	list-style-type: none;

	@media (max-width: 767px) {
		flex-direction: column;
		align-items: center;
		left: ${({ open }) => (open ? "0" : "-320px")};
		top: 0;
		box-shadow: ${({ open }) =>
			open ? "-10px 10px 45px #a9a9a9" : "none"};
		position: fixed;
		z-index: 10;
		width: 320px;
		height: 100%;
		line-height: 28px;
		padding: 100px 50px;
		background-color: ${({
			theme: {
				colors: { whiteColor },
			},
		}) => whiteColor};
		display: block;
		transition: left 1s cubic-bezier(0.19, 1, 0.22, 1);
	}
`;

const CloseIcon = styled.li<{ open: boolean }>`
	text-decoration: none;
	position: absolute;
	top: 30px;
	left: 50px;
	opacity: 1;
	overflow: hidden;
	font-size: 0px;
	cursor: pointer;
	width: 17px;
	height: 17px;
	margin: 0;
	/* opacity: ${({ open }) => (open ? "1" : "0")}; */
	/* transition-delay: ${({ open }) => (open ? "0.3s" : "0s")};
	transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1); */

	&:before {
		@media (min-width: 767px) {
			opacity: 0;
		}
		content: "";
		position: absolute;
		top: 50%;
		left: 0%;
		width: 100%;
		height: 3px;	
		margin-top: -1px;
		background-color: ${({
			theme: {
				colors: { black1Color },
			},
		}) => black1Color};
		
		transform: rotate(-45deg) translateX(0%);
		/* transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);	
		transition-delay: 0.1s; */
	}

	&:after {
		content: "";
		@media (min-width: 767px) {
			opacity: 0;
		}
		position: absolute;
		top: 50%; 
		left: 0%;
		width: 100%;
		height: 3px;
		margin-top: -1px;
		background-color: ${({
			theme: {
				colors: { black1Color },
			},
		}) => black1Color};
			
		transform: rotate(45deg) translateX(0%);
		/* transition: transform 0.9s cubic-bezier(0.4, 0, 0.2, 1);
		transition-delay: 0.1s; */
	}
`;

const StyledList = styled.li`
	text-decoration: none;
`;
const AnchorTag = styled.a`
	font-size: 18px;
	font-weight: 700;
	line-height: 28px;
	min-height: 50px;
	display: flex;
	align-items: center;
	margin: 0px 23px;
	box-sizing: border-box;
	color: ${({
		theme: {
			colors: { whiteColor },
		},
	}) => whiteColor};

	text-decoration: none;
	&:hover {
		color: ${({
			theme: {
				colors: { hoverColor },
			},
		}) => hoverColor};
	}

	@media (max-width: 991px) {
		margin: 0px 15px;
	}

	@media (max-width: 767px) {
		min-height: 18px;
		margin: 0 0 15px 0;
		color: ${({
			theme: {
				colors: { blackColor },
			},
		}) => blackColor};
		&:hover {
			color: ${({
				theme: {
					colors: { blackColor },
				},
			}) => blackColor};
		}
	}
`;

const ButtonTag = styled.a`
	background-color: ${({
		theme: {
			colors: { greenColor },
		},
	}) => greenColor};
	color: ${({
		theme: {
			colors: { whiteColor },
		},
	}) => whiteColor};

	margin: 8px 0px;
	border-radius: 4px;
	display: block;
	box-shadow: 0 2px 0 #6f9a37;
	font-size: 14px;
	font-weight: 700;
	padding: 5px 20px;
	line-height: 1.5;
	width: auto;
	@media (min-width: 767px) {
		display: none;
	}
`;

const NavBar: FC<NavBarProps> = ({ navItems }) => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Wrapper onClick={open && handleClose}>
			<MoreWrapper onClick={handleOpen}>
				<span className="burgerTop"></span>
				<span className="burgerMiddle"></span>
				<span className="burgerButtom"></span>
			</MoreWrapper>

			<InnerWrapper onClick={handleClose}>
				<StyledUnorderedList open={open}>
					<CloseIcon open={open} onClick={handleClose}></CloseIcon>
					{navItems.map(({ name, link }) => (
						<StyledList key={name}>
							<AnchorTag href={link}>{name}</AnchorTag>
						</StyledList>
					))}
				</StyledUnorderedList>
			</InnerWrapper>

			<ButtonTag>Buy now</ButtonTag>
		</Wrapper>
	);
};
export default NavBar;
