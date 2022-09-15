import "./Crew.scss";
import { Routes, Route, Navigate, Link, useParams } from "react-router-dom";
import useData from "@hooks/useData";
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
	const links = useData(crew);

	return (
		<main className="main">
			<h1 className="main__title title">
				<span className="title__number">02</span>
				<span className="title__text">meet your crew</span>
			</h1>
			<div className="crew">
				<div className="crew__background background" />
			</div>
			<Routes>
				<Route
					path="/:member"
					element={<Member Menu={<ActiveMenu links={links} />} />}
				></Route>
				<Route path="*" element={<Navigate to={`../${links[0]}`} />}></Route>
			</Routes>
		</main>
	);
}

export default Crew;

function ActiveMenu({ links }: { links: string[] }) {
	const linkMap = [];
	for (let link of links) {
		linkMap.push(<CustomLink className="crew__link" key={link} link={link} />);
	}

	return <div className="crew__link-container">{linkMap}</div>;
}

function CustomLink({ className, link }: { className: string; link: string }) {
	const params = useParams();
	const active = params.member === link;
	return (
		<Link
			className={`${className} ${className} ${
				active ? className + "--active" : ""
			}`}
			to={`../${link}`}
		/>
	);
}
