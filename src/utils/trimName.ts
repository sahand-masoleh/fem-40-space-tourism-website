function trimName(name: string) {
	return name.toLowerCase().replace(/\s+/, "-");
}

export default trimName;
