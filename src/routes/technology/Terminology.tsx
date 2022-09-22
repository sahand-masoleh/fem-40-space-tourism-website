import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { technology } from "@data/data.json";
import trimName from "@utils/trimName";
import { articleTransition } from "@styles/transitions";

interface Props {
	Menu: JSX.Element;
}

function Terminology({ Menu }: Props) {
	const { terminology: slug } = useParams();
	let navigate = useNavigate();

	const terminology = technology.find((e) => {
		return trimName(e.name) === slug;
	});

	useEffect(() => {
		if (!terminology) {
			navigate("../");
		}
	}, [terminology]);

	return (
		<div className="terminology">
			<motion.picture
				className="terminology__image image"
				key={slug + "-picture"}
				{...articleTransition(0.25)}
			>
				<source
					className="image__img"
					srcSet={terminology?.images.landscape}
					media="(max-width: 768px)"
				/>
				<img
					className="image__img"
					src={terminology?.images.portrait}
					alt={terminology?.name}
				/>
			</motion.picture>
			{Menu}
			<motion.article
				className="terminology__article"
				key={slug + "-article"}
				{...articleTransition(0.1)}
			>
				<h2 className="terminology__title">the terminology...</h2>
				<h3 className="terminology__name">{terminology?.name}</h3>
				<p className="terminology__description">{terminology?.description}</p>
			</motion.article>
		</div>
	);
}

export default Terminology;
