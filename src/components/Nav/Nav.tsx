/// <reference types="vite-plugin-svgr/client" />

import "./Nav.scss";

import { useLocation, matchPath } from "react-router-dom";
import { ReactComponent as Logo } from "@assets/shared/logo.svg";
import { useEffect, useState } from "react";
import CustomLink from "./CustomLink";
import HoverBox from "./HoverBox";

export enum paths {
	home = "home",
	destination = "destination",
	crew = "crew",
	technology = "technology",
}

type hoverBox = {
	clientWidth: number | null;
	offsetLeft: number | null;
};

function Nav() {
	const [current, setCurrent] = useState("");
	const location = useLocation();
	useEffect(() => {
		for (let path in paths) {
			if (matchPath({ path, end: false }, location.pathname)) {
				setCurrent(path);
				break;
			}
		}
	}, [location]);
	const [hoverBox, setHoverBox] = useState<hoverBox>({
		clientWidth: null,
		offsetLeft: null,
	});

	const linksMap = [];
	for (let index = 0; index < Object.keys(paths).length; index++) {
		const path = Object.keys(paths)[index];
		linksMap.push(
			<CustomLink
				key={index}
				path={path}
				number={index}
				active={current === path}
				handleHover={handleHover}
			/>
		);
	}

	function handleHover(offsetLeft?: number, clientWidth?: number) {
		if (offsetLeft && clientWidth) {
			setHoverBox({ offsetLeft, clientWidth });
		} else {
			setHoverBox({ offsetLeft: null, clientWidth: null });
		}
	}

	return (
		<nav className="nav">
			<div className="nav__logo image">
				<Logo className="image__img" />
			</div>
			<div className="nav__line"></div>
			<div className="nav__link-container" onMouseLeave={() => handleHover()}>
				{linksMap}
				<HoverBox left={hoverBox.offsetLeft} width={hoverBox.clientWidth} />
			</div>
		</nav>
	);
}

export default Nav;
