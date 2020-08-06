export interface ProductDetailsType {
	heading: string;
	subHeading: {
		top: string;
		bottom: string;
	};
	image: {
		imageSrc: string;
		altText: string;
	};
	productDetailsItemImage: {
		imageSrc: string;
		altText: string;
	};
}

export interface ProductDetailsProps {
	productDetailsData: ProductDetailsType[];
}
