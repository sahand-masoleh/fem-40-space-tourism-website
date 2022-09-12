import { Link } from "react-router-dom";

type data = {
	name: string;
};

function useData(data: data[], collection: string) {
	let links = [];
	for (let entry of data) {
		const slug = entry.name.toLowerCase();
		links.push(
			<Link key={slug} to={`../${slug}`} className={`${collection}__link`}>
				{slug}
			</Link>
		);
	}

	return links;
}

export default useData;
