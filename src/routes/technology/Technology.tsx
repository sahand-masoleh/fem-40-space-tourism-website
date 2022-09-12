import { Routes, Route, Navigate } from "react-router-dom";
import useData from "@routes/hooks/useData";
import Terminology from "./Terminology";

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
	const links = useData(technology, "technology");

	return (
		<main className="main">
			<h1 className="title">
				<span className="title__number">03</span>
				<span className="title__text">space launch 101</span>
			</h1>
			<Routes>
				<Route
					path="/:terminology"
					element={<Terminology links={links} />}
				></Route>
				<Route path="*" element={<Navigate to={links[0].props.to} />}></Route>
			</Routes>
		</main>
	);
}

export default Technology;
