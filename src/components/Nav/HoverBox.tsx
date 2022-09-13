import { CSSProperties, useEffect, useState } from "react";

interface Props {
	left: number | null;
	width: number | null;
}

function HoverBox({ left, width }: Props) {
	const [lastLeft, setLastLeft] = useState(0);
	const [lastWidth, setLastWidth] = useState(0);
	useEffect(() => {
		if (left && width) {
			setLastLeft(left);
			setLastWidth(width);
		}
	}, [left]);

	function handleTransitionEnd(event: React.TransitionEvent) {
		if (event.propertyName === "width" && !width) {
			setLastLeft(0);
			setLastWidth(0);
		}
	}

	const style = {
		"--left": lastLeft ? lastLeft + "px" : "unset",
		"--width": width ? width + "px" : "unset",
		"--last-width": lastWidth ? lastWidth + "px" : "unset",
	} as React.CSSProperties;

	return (
		<div
			className="hover-box"
			style={style}
			onTransitionEnd={handleTransitionEnd}
		></div>
	);
}

export default HoverBox;
