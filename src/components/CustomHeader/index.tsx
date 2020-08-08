import React from "react";
import { styled } from "theme";
import { Heading, SubHeading, Image } from "components";
import { CustomHeaderProps } from "./types";

const Wrapper = styled.div`
display:flex;
flex-direction:column;
align-items:center;
background:#F2F2F2;
padding-top:80px;
.imageStyle{
        background: center bottom no-repeat;
        height:377px;
        width:100%;
        padding-bottom:70px;
    }

`;


const InnerWrapper = styled.div` 

`;
const Abc=styled.div`
 width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    text-align:center;
    .headerStyle{
        margin-bottom:30px;
    }
    .subHeaderStyle{
        margin-bottom: 34px;
    }

`;

const CustomHeader: React.FC<CustomHeaderProps> = ({
	heading,
	subHeading:{ top, middle,bottom},
	image: { imageSrc, altText },
}) => {
    return (
    <Wrapper>
        <Abc>
        <InnerWrapper>
        <Heading content={heading}  className="headerStyle"/>
        <SubHeading content ={top} />
        <SubHeading content ={middle} />
        <SubHeading content ={bottom} className="subHeaderStyle"/>
        </InnerWrapper>
        </Abc>
        <Image image={imageSrc} altText={altText} className="imageStyle" />
    </Wrapper>
        );
};
export default CustomHeader;
