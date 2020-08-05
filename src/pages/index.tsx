import { NavBar, ExpressInstallation, MarketingAutomation,FacebookChat,RevolutionSlider,LookBook } from "components";

import {
	navItems,
	expressInstallationData,
	marketingAutomationData,
	facebookChatData,
	revolutionSliderData,
	lookBookData
} from "mock";


const HomePage = () => {
	return (
		<>
			<NavBar navItems={navItems} />
			<ExpressInstallation {...expressInstallationData} />
			<MarketingAutomation {...marketingAutomationData} />
			<FacebookChat {...facebookChatData} />
			<RevolutionSlider {...revolutionSliderData} />
			<LookBook {...lookBookData}/>
		</>
	);
};
export default HomePage;
