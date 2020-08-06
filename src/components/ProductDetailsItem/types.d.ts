export interface ProductDetailsItemProps{
    className?:string;
    heading:string;
    subHeading:{
        top:string;
        bottom:string;
    };
    image:{
        imageSrc:string;
        altText:string;
    };
    productDetailsItemImage:{ 
        imageSrc:string;
        altText:string;
    };
}