import "./Destination.scss";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import useData from "@hooks/useData";
import Planet from "./Planet";
import HoverMenu, { menuItem } from "@components/HoverMenu/HoverMenu";
import { pageTransition } from "@styles/transitions";

interface Props {
	destinations: {
		name: string;
		images: {
			webp: string;
		};
		description: string;
		distance: string;
		travel: string;
	}[];
}

function Destination({ destinations }: Props) {
	const links = useData(destinations);
	const location = useLocation();

	const items: menuItem[] = [];
	for (let link of links) {
		items.push({ link: "../" + link, element: <>{link}</> });
	}

	return (
		<motion.main className="main" {...pageTransition()}>
			<h1 className="main__title title">
				<span className="title__number">01</span>
				<span className="title__text">pick your destination</span>
			</h1>
			<div className="destination">
				<AnimatePresence mode="wait">
					<Routes location={location} key={location.pathname}>
						<Route
							path="/:planet"
							element={
								<Planet
									Menu={<HoverMenu block="destination" items={items} />}
								/>
							}
						></Route>
						<Route
							path="*"
							element={<Navigate to={`../${links[0]}`} />}
						></Route>
					</Routes>
				</AnimatePresence>
			</div>
		</motion.main>
	);
}

export default Destination;
