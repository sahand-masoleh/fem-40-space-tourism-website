import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { destinations } from "@data/data.json";
import trimName from "@utils/trimName";

function Planet() {
	const { planet: slug } = useParams();
	let navigate = useNavigate();

	const planet = destinations.find((e) => trimName(e.name) === slug);

	useEffect(() => {
		if (!planet) {
			navigate("../");
		}
	}, [planet]);

	return (
		<div className="planet">
			<div className="planet__image image">
				<img src={planet?.images.webp} alt="" className="image__img" />
			</div>
			<article className="planet__article">
				<h2 className="planet__name">{planet?.name}</h2>
				<p className="planet__description">{planet?.description}</p>
				<hr className="planet__line" />
				<div className="planet__stats-container">
					<div className="planet__stats stats">
						<span className="stats__title">avg. distance</span>
						<span className="stats__details">{planet?.distance}</span>
					</div>
					<div className="planet__stats stats">
						<span className="stats__title">est. travel time</span>
						<span className="stats__details">{planet?.travel}</span>
					</div>
				</div>
			</article>
		</div>
	);
}

export default Planet;
