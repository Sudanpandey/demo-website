export interface MegaMenuProps{
    className?:string;
    heading:{
        top:string;
        bottom:string;
    };
    subHeading:{
        head:string;
        tail:string;
    }
    image:{
        imageSrc:string;
        altText:string;
    };
}