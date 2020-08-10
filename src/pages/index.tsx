import {
	NavBar,
	ExpressInstallation,
	MarketingAutomation,
	FacebookChat,
	RevolutionSlider,
	LookBook,
	ProductDetails,
	OrderProduct,
	ProductPageLayout,
   CustomHeader,
   ProductImage,
   VariantSwatches,
   MegaMenu,
   FixedMenu,
   StarAlltime
} from "components";

import {
	navItems,
	expressInstallationData,
	marketingAutomationData,
	facebookChatData,
	revolutionSliderData,
	lookBookData,
	productDetailsData,
	checkOutData,
	notificationData,
	productPageLayoutData,
	customHeaderData,
	productImageData,
	variantSwatchesData,
	megaMenuData,
	fixedMenuData,
	starAlltimeData
} from "mock";


const HomePage = () => {    
	return (
		<>
			<NavBar navItems={navItems} />
			<ExpressInstallation {...expressInstallationData} />
			<MarketingAutomation {...marketingAutomationData} />
			<FacebookChat {...facebookChatData} />
			<RevolutionSlider {...revolutionSliderData} />
			<LookBook {...lookBookData} />

			<OrderProduct
				checkOutData={checkOutData}
				notificationData={notificationData}
			/>
			<ProductDetails productDetailsData={productDetailsData} />
			<StarAlltime {...starAlltimeData} />
			<ProductPageLayout {...productPageLayoutData} /> 
			<ProductImage {...productImageData}/>
			<CustomHeader {...customHeaderData}/>
			<VariantSwatches {...variantSwatchesData} />
			<MegaMenu {...megaMenuData} />
			<FixedMenu {...fixedMenuData}/>
			
			
			
		</>
	);
};
export default HomePage;
