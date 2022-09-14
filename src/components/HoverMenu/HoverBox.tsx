import { useEffect, useState } from "react";

export type hoverDims = {
	width?: number;
	left?: number;
};

interface Props {
	className: string;
	hoverDims?: hoverDims;
}

function HoverBox({ className, hoverDims }: Props) {
	const [lastLeft, setLastLeft] = useState<number | undefined>(undefined);
	const [lastWidth, setLastWidth] = useState(0);
	useEffect(() => {
		if (hoverDims?.left !== undefined && hoverDims?.width) {
			setLastLeft(hoverDims?.left);
			setLastWidth(hoverDims?.width);
		}
	}, [hoverDims]);

	function handleTransitionEnd(event: React.TransitionEvent) {
		if (event.propertyName === "width" && !hoverDims?.width) {
			setLastLeft(undefined);
			setLastWidth(0);
		}
	}

	const style = {
		"--left": lastLeft != undefined ? lastLeft + "px" : "unset",
		"--width": hoverDims?.width ? hoverDims?.width + "px" : "unset",
		"--last-width": lastWidth ? lastWidth + "px" : "unset",
	} as React.CSSProperties;

	return (
		<div
			className={className}
			style={style}
			onTransitionEnd={handleTransitionEnd}
		></div>
	);
}

export default HoverBox;
