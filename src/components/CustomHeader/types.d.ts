export interface CustomHeaderProps{
    className?:string;
    heading:string;
    subHeading:{
        top:string;
        middle:string;
        bottom:string;
    }
    image:{
        imageSrc:string;
        altText:string;
    };
}