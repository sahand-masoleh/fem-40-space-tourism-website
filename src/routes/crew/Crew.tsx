import { Routes, Route, Navigate } from "react-router-dom";
import useData from "@routes/hooks/useData";
import Member from "./Member";

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
	const links = useData(crew, "crew");

	return (
		<main className="main">
			<h1 className="title">
				<span className="title__number">02</span>
				<span className="title__text">meet your crew</span>
			</h1>
			<Routes>
				<Route path="/:member" element={<Member links={links} />}></Route>
				<Route path="*" element={<Navigate to={links[0].props.to} />}></Route>
			</Routes>
		</main>
	);
}

export default Crew;
