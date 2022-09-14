import { useRef } from "react";
import { Link } from "react-router-dom";
import { hoverDims } from "./HoverBox";

interface Props {
	className: string;
	path: string;
	active: boolean;
	handleHoverDims: (dims?: hoverDims) => void;
	children: string | JSX.Element | JSX.Element[];
}

function CustomLink({
	className,
	path,
	active,
	handleHoverDims,
	children,
}: Props) {
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

export default CustomLink;
