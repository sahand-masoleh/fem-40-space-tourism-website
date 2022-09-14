import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import CustomLink from "./CustomLink";
import HoverBox, { hoverDims } from "./HoverBox";

export type menuItem = { link: string; element: JSX.Element };

interface Props {
	block: string;
	items: menuItem[];
}

function HoverMenu({ block, items }: Props) {
	const [current, setCurrent] = useState("");
	const location = useLocation();
	const [hoverDims, setHoverDims] = useState<hoverDims | undefined>();
	useEffect(() => {
		for (let item of items) {
			if (location.pathname.split("/").at(-1) === item.link) {
				setCurrent(item.link);
				break;
			}
		}
	}, [location]);

	const linkMap = [];
	for (let item of items) {
		linkMap.push(
			<CustomLink
				key={item.link}
				className={`${block}__link`}
				path={item.link}
				active={current === item.link}
				handleHoverDims={setHoverDims}
			>
				{item.element}
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
