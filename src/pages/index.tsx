import { NavBar, ExpressInstallation } from "components";

import { navItems, expressInstallationData } from "mock";

const HomePage = () => {
	return (
		<>
			<NavBar navItems={navItems} />
			<ExpressInstallation {...expressInstallationData} />
		</>
	);
};
export default HomePage;
