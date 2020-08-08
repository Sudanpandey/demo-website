interface GridLayoutImage {
	image: {
		imageSrc: string;
		altText: string;
	};
	label: string;
}

export interface ProductPageLayoutProps {
	className?: string;
	heading: string;
	subHeading: string;
	image: {
		imageSrc: string;
		altText: string;
	};
	gridLayoutImages: GridLayoutImage[];
}
