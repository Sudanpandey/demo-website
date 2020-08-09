interface ProductImage{
    image:{
        imageSrc:string;
        altText:string;
    };
}
export interface ProductImageProps{
    className?:string;
    heading:string;
    subHeading:string;
    productImages:ProductImage[];
}