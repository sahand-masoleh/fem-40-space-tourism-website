import SimpleLink from "./SimpleLink";

export type item = {
	link: string;
	element: JSX.Element;
};

interface Props {
	items: item[];
	block: string;
}

function SimpleMenu({ items, block }: Props) {
	const linkMap = [];
	for (let item of items) {
		linkMap.push(
			<SimpleLink key={item.link} className={`${block}__link`} path={item.link}>
				{item.element}
			</SimpleLink>
		);
	}

	return <div className={`${block}__link-container`}>{linkMap}</div>;
}

export default SimpleMenu;
