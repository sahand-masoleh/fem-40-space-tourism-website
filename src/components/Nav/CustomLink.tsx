import { useRef } from "react";
import { Link } from "react-router-dom";

interface Props {
	path: string;
	number: number;
	active: boolean;
	handleHover: Function;
}

function CustomLink({ path, number, active, handleHover }: Props) {
	const elemRef = useRef<HTMLAnchorElement | null>(null);

	function handleMouseEnter() {
		const { offsetLeft, clientWidth } = elemRef.current || {};
		handleHover(offsetLeft, clientWidth);
	}

	return (
		<Link
			ref={elemRef}
			to={`../${path}`}
			className={`link ${active ? "link--active " : ""}`}
			onMouseEnter={() => handleMouseEnter()}
		>
			<span className="link__number">{number.toString().padStart(2, "0")}</span>{" "}
			<span className="link__text">{path}</span>
		</Link>
	);
}

export default CustomLink;
