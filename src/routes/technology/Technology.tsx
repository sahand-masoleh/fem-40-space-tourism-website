import "./Technology.scss";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import useData from "@hooks/useData";
import Terminology from "./Terminology";
import SimpleMenu, { item } from "@components/SimpleMenu/SimpleMenu";
import { pageTransition } from "@styles/transitions";

interface Props {
	technology: {
		name: string;
		images: {
			portrait: string;
			landscape: string;
		};
		description: string;
	}[];
}

function Technology({ technology }: Props) {
	const links = useData(technology);
	const location = useLocation();

	const items: item[] = [];
	for (let index = 0; index < links.length; index++) {
		items.push({ link: links[index], element: <>{index + 1}</> });
	}

	return (
		<motion.main className="main" {...pageTransition()}>
			<h1 className="main__title title">
				<span className="title__number">03</span>
				<span className="title__text">space launch 101</span>
			</h1>
			<div className="technology">
				<AnimatePresence mode="wait">
					<Routes key={location.pathname} location={location}>
						<Route
							path="/:terminology"
							element={
								<Terminology
									Menu={<SimpleMenu items={items} block="technology" />}
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

export default Technology;
