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
			<ProductPageLayout {...productPageLayoutData} /> 
		</>
	);
};
export default HomePage;
