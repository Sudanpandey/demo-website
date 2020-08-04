import { NavBar, ExpressInstallation, MarketingAutomation } from "components";

import {
	navItems,
	expressInstallationData,
	marketingAutomationData,
} from "mock";

const HomePage = () => {
	return (
		<>
			<NavBar navItems={navItems} />
			<ExpressInstallation {...expressInstallationData} />
			<MarketingAutomation {...marketingAutomationData} />
		</>
	);
};
export default HomePage;
