import baseStyled, { ThemedBaseStyledInterface } from "styled-components";

const colors = {
	

    blackColor: "#262626",
    blackSecond: "#1a1a1a",
	greenColor: "#82b440",
    whiteColor: "#FFFFFF",
    lightBlack:"#9E9E9E",   
    backgroundColor:"#F5F5F5",
    buttonColor:"#FBA62F",
    greenlightColor:"#479F5F",
    redColor:"#F24B5C",
    yellowColor:"#F29C2D",
    blueColor:"#3598DB",
    textMarqueeColor:"#9A58B6",
    bluecolor:"#4A50BF",
    buttonBackground:"#494FBD",
    imageBackground:"#110D2C",
    imageBackgroundHover1:"#DE514A",
    imageBackgroundHover2:"#F99B30",
    imageBackgroundHover3:"#FECF39",
    imageBackgroundHover4:"#F34727",
    imageBackgroundHover5:"#3BA0FA",
    imageBackgroundHover6:"#836AF2",
    imageBackgroundHover7:"#93BA50",
    imageBackgroundHover8:"#52C7A9",
    imageBackgroundHover9:"#4D67A1",
    imageBackgroundHover10:"#9CD0EE",
    imageBackgroundHover11:"#729F9F",
    imageBackgroundHover12:"#AA6988",
    imageBackgroundHover13:"#CDCDCD",
    imageBackgroundHover14:"#62779D",
    imageBackgroundHover15:"#88A43F",
    imageBackgroundHover16:"#D6532C",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    imageBackgroundHover17:"#6C9D6D",
    imageBackgroundHover18:"#71D7EF",
    imageBackgroundHover19:"#4FB589",
    hoverColor:"#A4D133",
    navbarColor:"#002341",
    // whiteColor:"#ffffff",
    black1Color:"#000000",
    // lightblackColor:"#737373",
    // lightblack1Color:"#505050",
    underlineColor:"#002F4D",
    // buttonColor:"#82B440",
    // yellowColor:"#DBED39",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    // backgroundColor:"#002C4C",
    // backgroundColor1:"#451A19",
    // redColor:"#E64445",
    // blueColor:"#016DDC",
    // blackcolor1:"#333333",
    // lightGreen:"#39A6AE",
    // lightYellow:"#FDBA59",
    // backgroundColor2:"#F2F2F2",  
};

export const theme = {
	colors,
};

export type Theme = typeof theme;

export const styled = baseStyled as ThemedBaseStyledInterface<Theme>;
export default theme;
