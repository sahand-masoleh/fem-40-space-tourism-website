export const fade = (final: number) => ({
	initial: { opacity: 0 },
	animate: { opacity: final },
	exit: { opacity: 0 },
});

export const slide = () => ({
	initial: { x: "-100%" },
	animate: { x: 0 },
	exit: { x: "-100%" },
});
