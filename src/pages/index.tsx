import { NavBar, ExpressInstallation, MarketingAutomation,FacebookChat } from "components";

import {
	navItems,
	expressInstallationData,
	marketingAutomationData,
	FacebookChatData,
} from "mock";

const HomePage = () => {
	return (
		<>
			<NavBar navItems={navItems} />
			<ExpressInstallation {...expressInstallationData} />
			<MarketingAutomation {...marketingAutomationData} />
			<FacebookChat {...FacebookChatData} />
		</>
	);
};
export default HomePage;
