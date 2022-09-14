import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import CustomLink from "./CustomLink";
import HoverBox, { hoverDims } from "./HoverBox";

interface Props {
	block: string;
	links: string[];
}

function HoverMenu({ block, links }: Props) {
	const [current, setCurrent] = useState("");
	const location = useLocation();
	const [hoverDims, setHoverDims] = useState<hoverDims | undefined>();
	useEffect(() => {
		for (let link of links) {
			if (location.pathname.split("/").at(-1) === link) {
				setCurrent(link);
				break;
			}
		}
	}, [location]);

	const linkMap = [];
	for (let link of links) {
		linkMap.push(
			<CustomLink
				key={link}
				className={`${block}__link`}
				path={link}
				active={current === link}
				handleHoverDims={setHoverDims}
			>
				{link}
			</CustomLink>
		);
	}

	return (
		<div
			className={`${block}__link-container`}
			onMouseLeave={() => setHoverDims(undefined)}
		>
			{linkMap}
			<HoverBox className={`${block}__hoverbox`} hoverDims={hoverDims} />
		</div>
	);
}

export default HoverMenu;
