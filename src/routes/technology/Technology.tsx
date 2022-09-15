import "./Technology.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import useData from "@hooks/useData";
import Terminology from "./Terminology";
import SimpleMenu, { item } from "@components/SimpleMenu/SimpleMenu";

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

	const items: item[] = [];
	for (let index = 0; index < links.length; index++) {
		items.push({ link: links[index], element: <>{index + 1}</> });
	}

	return (
		<main className="main">
			<h1 className="main__title title">
				<span className="title__number">03</span>
				<span className="title__text">space launch 101</span>
			</h1>
			<div className="technology">
				<div className="technology__background background" />
				<Routes>
					<Route
						path="/:terminology"
						element={
							<Terminology
								Menu={<SimpleMenu items={items} block="technology" />}
							/>
						}
					></Route>
					<Route path="*" element={<Navigate to={`../${links[0]}`} />}></Route>
				</Routes>
			</div>
		</main>
	);
}

export default Technology;
