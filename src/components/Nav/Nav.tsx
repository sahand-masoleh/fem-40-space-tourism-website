/// <reference types="vite-plugin-svgr/client" />

import "./Nav.scss";

import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "@assets/shared/logo.svg";

function Nav() {
	return (
		<nav>
			<div className="nav__logo image">
				<Logo className="image__img" />
			</div>
			<div className="nav__line"></div>
			<div className="nav__link-container">
				<Link to="/" className="link">
					<span className="link__number">00</span>{" "}
					<span className="link__text">Home</span>
				</Link>
				<Link to="/destination" className="link">
					<span className="link__number">01</span>{" "}
					<span className="link__text">Destination</span>
				</Link>
				<Link to="/crew" className="link">
					<span className="link__number">02</span>{" "}
					<span className="link__text">Crew</span>
				</Link>
				<Link to="/technology" className="link">
					<span className="link__number">03</span>{" "}
					<span className="link__text">Technology</span>
				</Link>
			</div>
		</nav>
	);
}

export default Nav;
