/// <reference types="vite-plugin-svgr/client" />

import "./Nav.scss";

import { ReactComponent as Logo } from "@assets/shared/logo.svg";
import HoverMenu, { menuItem } from "@components/HoverMenu/HoverMenu";

export enum paths {
	home = "home",
	destination = "destination",
	crew = "crew",
	technology = "technology",
}

const items: menuItem[] = [];
for (let index = 0; index < Object.keys(paths).length; index++) {
	const link = Object.keys(paths)[index];
	items.push({
		link,
		element: (
			<>
				<span className="nav__number">{index.toString().padStart(2, "0")}</span>
				<span className="nav__text">{link}</span>
			</>
		),
	});
}

function Nav() {
	return (
		<nav className="nav">
			<div className="nav__logo image">
				<Logo className="image__img" />
			</div>
			<div className="nav__line"></div>
			<HoverMenu block="nav" items={items} />
		</nav>
	);
}

export default Nav;
