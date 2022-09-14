import { useEffect, useState } from "react";

interface Props {
	className: string;
	left?: number;
	width?: number;
}

function HoverBox({ className, left, width }: Props) {
	const [lastLeft, setLastLeft] = useState<number | undefined>(undefined);
	const [lastWidth, setLastWidth] = useState(0);
	useEffect(() => {
		if (left !== undefined && width) {
			setLastLeft(left);
			setLastWidth(width);
		}
	}, [left]);

	function handleTransitionEnd(event: React.TransitionEvent) {
		if (event.propertyName === "width" && !width) {
			setLastLeft(undefined);
			setLastWidth(0);
		}
	}

	const style = {
		"--left": lastLeft != undefined ? lastLeft + "px" : "unset",
		"--width": width ? width + "px" : "unset",
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
