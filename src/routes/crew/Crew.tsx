import "./Crew.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import useData from "@hooks/useData";
import Member from "./Member";
import SimpleMenu, { item } from "@components/SimpleMenu/SimpleMenu";

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

	const items: item[] = [];
	for (let link of links) {
		items.push({ link, element: <></> });
	}

	return (
		<main className="main">
			<h1 className="main__title title">
				<span className="title__number">02</span>
				<span className="title__text">meet your crew</span>
			</h1>
			<div className="crew">
				<div className="crew__background background" />
				<Routes>
					<Route
						path="/:member"
						element={
							<Member Menu={<SimpleMenu items={items} block="crew" />} />
						}
					></Route>
					<Route path="*" element={<Navigate to={`../${links[0]}`} />}></Route>
				</Routes>
			</div>
		</main>
	);
}

export default Crew;
