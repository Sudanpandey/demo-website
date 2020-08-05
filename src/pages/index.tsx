import { NavBar, ExpressInstallation, MarketingAutomation,FacebookChat,RevolutionSlider } from "components";

import {
	navItems,
	expressInstallationData,
	marketingAutomationData,
	facebookChatData,
	revolutionSliderData,
} from "mock";


const HomePage = () => {
	return (
		<>
			<NavBar navItems={navItems} />
			<ExpressInstallation {...expressInstallationData} />
			<MarketingAutomation {...marketingAutomationData} />
			<FacebookChat {...facebookChatData} />
			<RevolutionSlider {...revolutionSliderData} />
		</>
	);
};
export default HomePage;
