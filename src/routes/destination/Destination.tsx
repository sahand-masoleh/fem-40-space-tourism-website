import "./Destination.scss";
import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import useData from "@hooks/useData";
import LinkHover, { hoverDims } from "@components/LinkHover/LinkHover";
import HoverBox from "@components/LinkHover/HoverBox";
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
	const links = useData(destinations);
	const [current, setCurrent] = useState("");
	const location = useLocation();
	const [hoverDims, setHoverDims] = useState<hoverDims | undefined>();

	useEffect(() => {
		for (let link of links) {
			if (location.pathname.split("/").at(-1) === link) {
				setCurrent(link);
				break;
			}
		}
	}, [location]);

	const linkMap = [];
	for (let link of links) {
		linkMap.push(
			<LinkHover
				key={link}
				className="destination__link"
				path={link}
				active={current === link}
				handleHoverDims={setHoverDims}
			>
				{link}
			</LinkHover>
		);
	}

	return (
		<main className="main">
			<h1 className="main__title title">
				<span className="title__number">01</span>
				<span className="title__text">pick your destination</span>
			</h1>
			<div className="destination">
				<div className="destination__background"></div>
				<div
					className="destination__link-container"
					onMouseLeave={() => setHoverDims(undefined)}
				>
					{linkMap}
					<HoverBox
						className="destination__hoverbox"
						left={hoverDims?.offsetLeft ?? undefined}
						width={hoverDims?.clientWidth ?? undefined}
					/>
				</div>
				<Routes>
					<Route path="/:planet" element={<Planet />}></Route>
					<Route path="*" element={<Navigate to={`../${links[0]}`} />}></Route>
				</Routes>
			</div>
		</main>
	);
}

export default Destination;
