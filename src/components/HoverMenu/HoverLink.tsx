import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { hoverDims } from "./HoverBox";

interface Props {
	className: string;
	path: string;
	handleHoverDims: (dims?: hoverDims) => void;
	children: string | JSX.Element | JSX.Element[];
}

function HoverLink({ className, path, handleHoverDims, children }: Props) {
	const elemRef = useRef<HTMLAnchorElement | null>(null);
	const { pathname } = useLocation();
	const [active, setActive] = useState<boolean>(false);

	useEffect(() => {
		if (!!pathname.match(new RegExp(`${path}`))) {
			setActive(true);
		} else {
			setActive(false);
		}
	}, [pathname]);

	function handleMouseEnter() {
		const { clientWidth, offsetLeft } = elemRef.current || {};
		if (clientWidth && offsetLeft !== undefined) {
			handleHoverDims({ width: clientWidth, left: offsetLeft });
		} else {
			handleHoverDims(undefined);
		}
	}

	return (
		<Link
			ref={elemRef}
			to={path}
			className={`${className} ${active ? `${className}--active` : ""}`}
			onMouseEnter={() => handleMouseEnter()}
		>
			{children}
		</Link>
	);
}

export default HoverLink;
