import { FacebookChatItemsProps } from "../FacebookChatItem/types";

export interface FacebookChatProps {
	heading: {
		top: string;
		bottom: string;
	}
	image: {
		imageSrc: string;
		altText: string;
    };
    messangerImage: {
		imageSrc: string;
		altText: string;
    };
    chatImage: {
		imageSrc: string;
		altText: string;
    };
    
	items: FacebookChatItemProps[]; 
}
	