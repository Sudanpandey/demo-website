import React from "react";
import { styled } from "theme";
import { Heading, SubHeading, Image } from "components";
import { LookBookProps } from "./types";

const Wrapper = styled.div`
background:#395029 url("/lookbookimage.webp") center 0 no-repeat;
background-size:cover;
min-height:628px;
padding:80px 0px;
`;


const InnerWrapper = styled.div` 
width:50%;
text-align:center;
padding-left:55px;
 padding-top:130px;
.imageStyle{
    display: block;
    margin: 0 auto 30px;
    

}
.headingStyle{
    margin-bottom:30px;
}
.subHeadingStyle{
    margin-bottom:35px;
}

`;
const LookBook: React.FC<LookBookProps> = ({
	heading,
	subHeading,
	image: { imageSrc, altText },
}) => {
    return (
    <Wrapper>
        <InnerWrapper>
        <Image image={imageSrc} altText={altText} className="imageStyle"/>
        <Heading content={heading} color="white" className="headingStyle"/>
        <SubHeading content ={subHeading} color="white" className="subHeadingStyle"/>
        </InnerWrapper>
    </Wrapper>
        );
};
export default LookBook;
