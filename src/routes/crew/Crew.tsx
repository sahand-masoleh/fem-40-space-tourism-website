import "./Crew.scss";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import useData from "@hooks/useData";
import Member from "./Member";
import SimpleMenu, { item } from "@components/SimpleMenu/SimpleMenu";
import { pageTransition } from "@styles/transitions";

interface Props {
	crew: {
		name: string;
		images: {
			webp: string;
		};
		role: string;
		bio: string;
	}[];
}

function Crew({ crew }: Props) {
	const links = useData(crew);
	const location = useLocation();

	const items: item[] = [];
	for (let link of links) {
		items.push({ link, element: <></> });
	}

	return (
		<motion.main className="main" {...pageTransition()}>
			<h1 className="main__title title">
				<span className="title__number">02</span>
				<span className="title__text">meet your crew</span>
			</h1>
			<div className="crew">
				<AnimatePresence mode="wait">
					<Routes location={location} key={location.pathname}>
						<Route
							path="/:member"
							element={
								<Member Menu={<SimpleMenu items={items} block="crew" />} />
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

export default Crew;
