import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { destinations } from "@data/data.json";
import trimName from "@utils/trimName";
import { articleTransition } from "@styles/transitions";

interface Props {
	Menu: JSX.Element;
}

function Planet({ Menu }: Props) {
	const { planet: slug } = useParams();
	const navigate = useNavigate();

	const planet = destinations.find((e) => trimName(e.name) === slug);

	useEffect(() => {
		if (!planet) {
			navigate("../");
		}
	}, [planet]);

	return (
		<div className="planet">
			<motion.div className="planet__image image" {...articleTransition(0.1)}>
				<img
					src={planet?.images.webp}
					alt=""
					className="image__img planet__img"
				/>
			</motion.div>
			{Menu}
			<motion.article className="planet__article" {...articleTransition(0.25)}>
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
			</motion.article>
		</div>
	);
}

export default Planet;
