import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { hoverDims } from "./HoverBox";

interface Props {
	className: string;
	path: string;
	handleHoverDims: (dims?: hoverDims) => void;
	children: string | JSX.Element | JSX.Element[];
}

function HoverLink({ className, path, handleHoverDims, children }: Props) {
	const elemRef = useRef<HTMLAnchorElement | null>(null);

	function handleMouseEnter() {
		const { clientWidth, offsetLeft } = elemRef.current || {};
		if (clientWidth && offsetLeft !== undefined) {
			handleHoverDims({ width: clientWidth, left: offsetLeft });
		} else {
			handleHoverDims(undefined);
		}
	}

	return (
		<NavLink
			ref={elemRef}
			to={path}
			className={({ isActive }) =>
				`${className} ${isActive ? `${className}--active` : ""}`
			}
			onMouseEnter={() => handleMouseEnter()}
		>
			{children}
		</NavLink>
	);
}

export default HoverLink;
