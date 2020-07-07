import NavBar from "components/navbar";

import { navItems } from "mock";
// import Logo from "assets/logo";

const HomePage = () => {
	return (
		<>
		   <NavBar  navItems={navItems} />
		</>
	);
};
export default HomePage;
