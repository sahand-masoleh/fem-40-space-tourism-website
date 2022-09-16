import "./Destination.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import useData from "@hooks/useData";
import Planet from "./Planet";
import HoverMenu, { menuItem } from "@components/HoverMenu/HoverMenu";

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

	const items: menuItem[] = [];
	for (let link of links) {
		items.push({ link: "../" + link, element: <>{link}</> });
	}

	return (
		<main className="main">
			<h1 className="main__title title">
				<span className="title__number">01</span>
				<span className="title__text">pick your destination</span>
			</h1>
			<div className="destination">
				<div className="destination__background background" />
				<Routes>
					<Route
						path="/:planet"
						element={
							<Planet Menu={<HoverMenu block="destination" items={items} />} />
						}
					></Route>
					<Route path="*" element={<Navigate to={`../${links[0]}`} />}></Route>
				</Routes>
			</div>
		</main>
	);
}

export default Destination;
