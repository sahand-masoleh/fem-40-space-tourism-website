import { MotionProps } from "framer-motion";

export function articleTransition(duration: number = 0.25): MotionProps {
	return {
		initial: { opacity: 0, x: "-1rem" },
		animate: { opacity: 1, x: 0 },
		exit: { opacity: 0, x: "1rem" },
		transition: { duration },
	};
}
