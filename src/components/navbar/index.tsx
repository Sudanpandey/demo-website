
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
    /* color: ${({
      theme: {
        colors: { whiteColor },
      },
    }) => whiteColor};
    .ulStyle {
      display: none;
    } */
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
    left: 0;
    top: 0;
    box-shadow: -10px 10px 45px #a9a9a9;
    position: fixed;
    z-index: 10;
    width: 320px;
    height: 100%;
    line-height: 28px;
    display: block;  
    padding: 100px 50px;
    background-color: ${({
      theme: {
        colors: { whiteColor },
      },
    }) => whiteColor};
         transition: left 1 s cubic-bezier(0.1, 0.7, 1.0, 0.1);
    display: ${({ open }) => (open ? "block" : "none")};
  }
`;

const CloseIcon = styled.li`
  text-decoration: none;
  position: absolute;
  top: 30px;
  left: 70px;
  display: block;
  overflow: hidden;
  font-size: 0px;
  cursor: pointer;
  width: 17px;
  height: 17px;
  margin: 0;
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 1;
  transition-delay: 0.3s;

  &:before {
    @media (min-width: 767px) {
      display: none;
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
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(-45deg) translateX(0%);
  }

  &:after {
    content: "";
    @media (min-width: 767px) {
      display: none;
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
    transition: transform 0.9s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(45deg) translateX(0%);
  }
`;

const StyledList = styled.li`
  text-decoration: none;
`;
const AnchorTag = styled.a`
  font-family: "Nunito Sans", sans-serif;
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

@media (max-width: 767px) {
    color: ${({
      theme: {
        colors: { blackColor },
      },
    }) => blackColor};
      &:hover {
     color:${({
       theme:{
         colors:{blackColor},
       },
     })=>blackColor};
   }
  }
  text-decoration: none;
  &:hover {
    color: ${({
      theme: {
        colors: { hoverColor },
      },
    }) => hoverColor};
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
          <CloseIcon onClick={handleClose}></CloseIcon> 
          {navItems.map(({ name, link }) => (
            <StyledList key={name}>
              <AnchorTag href={link}>{name}</AnchorTag>
            </StyledList>
          ))}
        </StyledUnorderedList>
      </InnerWrapper>

      <ButtonTag>Buy Now</ButtonTag>
    </Wrapper>
  );
};
export default NavBar;    