import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { destinations } from "@data/data.json";

interface Props {
	links: JSX.Element[];
}

function Planet({ links }: Props) {
	const { planet: slug } = useParams();
	let navigate = useNavigate();

	const planet = destinations.find((e) => e.name.toLowerCase() === slug);

	useEffect(() => {
		if (!planet) {
			navigate("../");
		}
	}, [planet]);

	return (
		<div className="destination">
			{links}
			<div className="destination___image image" hidden>
				<img src={planet?.images.webp} alt="" className="image__img" />
			</div>
			<h2 className="destination__name">{planet?.name}</h2>
			<p className="destination__description">{planet?.description}</p>
			<hr className="destination__line" />
			<div className="destination__stats stats">
				<span className="stats__title">avg. distance</span>
				<span className="stats__details">{planet?.distance}</span>
			</div>
			<div className="destination__stats stats">
				<span className="stats__title">est. travel time</span>
				<span className="stats__details">{planet?.travel}</span>
			</div>
		</div>
	);
}

export default Planet;
