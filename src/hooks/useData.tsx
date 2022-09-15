import trimName from "@utils/trimName";

type data = {
	name: string;
};

function useData(data: data[]) {
	let links = [];
	for (let entry of data) {
		const slug = trimName(entry.name);
		links.push(slug);
	}

	return links;
}

export default useData;
