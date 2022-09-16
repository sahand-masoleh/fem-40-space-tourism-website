/// <reference types="vite-plugin-svgr/client" />

import "./Nav.scss";

import React, { useState } from "react";
import { ReactComponent as Logo } from "@assets/shared/logo.svg";
import HoverMenu, { menuItem } from "@components/HoverMenu/HoverMenu";
import { ReactComponent as OpenIcon } from "@assets/shared/icon-hamburger.svg";
import { ReactComponent as CloseIcon } from "@assets/shared/icon-close.svg";

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
	const [isOpen, setIsOpen] = useState<boolean>(false);

	function handleMobileMenu(): void {
		setIsOpen((prev) => !prev);
	}

	return (
		<nav
			className="nav"
			style={{ "--menu-open": isOpen ? 1 : "" } as React.CSSProperties}
			onClick={isOpen ? handleMobileMenu : undefined}
		>
			<div className="nav__logo image">
				<Logo className="image__img" />
			</div>
			<div className="nav__line"></div>
			<HoverMenu block="nav" items={items} />
			<button
				className="nav__button image"
				onClick={!isOpen ? handleMobileMenu : undefined}
			>
				{!isOpen ? (
					<OpenIcon className="image__img" />
				) : (
					<CloseIcon className="image__img" />
				)}
			</button>
		</nav>
	);
}

export default Nav;
