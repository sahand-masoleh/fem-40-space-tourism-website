import { useRef } from "react";
import { Link } from "react-router-dom";

export type hoverDims = {
	clientWidth?: number;
	offsetLeft?: number;
};

interface Props {
	className: string;
	path: string;
	active: boolean;
	handleHoverDims: (hoverDims?: hoverDims) => void;
	children: string | JSX.Element | JSX.Element[];
}

function LinkHover({
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
			handleHoverDims({ clientWidth, offsetLeft });
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

export default LinkHover;
