import { useState } from "react";

import HoverLink from "./HoverLink";
import HoverBox, { hoverDims } from "./HoverBox";

export type menuItem = { link: string; element: JSX.Element };

interface Props {
	block: string;
	items: menuItem[];
}

function HoverMenu({ block, items }: Props) {
	const [hoverDims, setHoverDims] = useState<hoverDims | undefined>();
	const linkMap = [];

	for (let item of items) {
		linkMap.push(
			<HoverLink
				key={item.link}
				className={`${block}__link`}
				path={item.link}
				handleHoverDims={setHoverDims}
			>
				{item.element}
			</HoverLink>
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
