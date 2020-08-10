import React from "react";
import { styled } from "theme";
import { Heading, SubHeading, Image } from "components";
import { CustomHeaderProps } from "./types";

const Wrapper = styled.div`
display:flex;
border-top:2px solid #ffffff;
flex-direction:column;
align-items:center;
background:#F2F2F2;
padding: 70px  0px 80px;
text-align:center;

.headerStyle{
        margin-bottom:30px;
    }
    .subHeaderStyle{
        margin-bottom: 34px;
    }

/* .imageStyle{
        background: center bottom no-repeat;
        height:377px;
        width:100%;
        padding-bottom:70px;
    } */

`;


const InnerWrapper = styled.div` 
width:100%;
margin:0px 42px;
padding:0px 15px;
`;
const Abc=styled.div`
 width: 100%;
    margin-right: auto;
    margin-left: auto;  
    text-align:center;
    background:url("/customheaderimage.webp") center bottom no-repeat;
     height: 377px;


`;

const CustomHeader: React.FC<CustomHeaderProps> = ({
	heading,
	subHeading:{ top, middle,bottom},
	// image: { imageSrc, altText },
}) => {
    return (
    <Wrapper>
        <InnerWrapper>
        <Heading content={heading}   color="blackSecond" className="headerStyle"/>
        <SubHeading content ={top} color="blackSecond" />
        <SubHeading content ={middle} color="blackSecond" />
        <SubHeading content ={bottom} color="blackSecond" className="subHeaderStyle"/>
        </InnerWrapper>
        <Abc>

        </Abc>
        {/* <Image image={imageSrc} altText={altText} className="imageStyle" /> */}
    </Wrapper>
        );    
};
export default CustomHeader;
  
