type data = {
	name: string;
};

function useData(data: data[]) {
	let links = [];
	for (let entry of data) {
		const slug = entry.name.toLowerCase();
		links.push(slug);
	}

	return links;
}

export default useData;
