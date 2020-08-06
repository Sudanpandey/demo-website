import {
	NavBar,
	ExpressInstallation,
	MarketingAutomation,
	FacebookChat,
	RevolutionSlider,
	LookBook,
	ProductDetails,
} from "components";

import {
	navItems,
	expressInstallationData,
	marketingAutomationData,
	facebookChatData,
	revolutionSliderData,
	lookBookData,
	productDetailsData,
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
			<ProductDetails productDetailsData={productDetailsData} />
		</>
	);
};
export default HomePage;
