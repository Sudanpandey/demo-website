import { MarketingAutomationItemsProps } from "../MarketingAutomationItem/types";

export interface MarketingAutomationProps {
	image: {
		imageSrc: string;
		altText: string;
	};
	heading: string;
	items: MarketingAutomationItemsProps[];
}
