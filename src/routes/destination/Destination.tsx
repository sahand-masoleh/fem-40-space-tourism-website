import { Routes, Route, Navigate } from "react-router-dom";
import useData from "@routes/hooks/useData";
import Planet from "./Planet";

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
	const links = useData(destinations, "destination");

	return (
		<main className="main">
			<h1 className="title">
				<span className="title__number">01</span>
				<span className="title__text">pick your destination</span>
			</h1>
			<Routes>
				<Route path="/:planet" element={<Planet links={links} />}></Route>
				<Route path="*" element={<Navigate to={links[0].props.to} />}></Route>
			</Routes>
		</main>
	);
}

export default Destination;
