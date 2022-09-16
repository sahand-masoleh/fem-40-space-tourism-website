import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { technology } from "@data/data.json";
import trimName from "@utils/trimName";

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
			<picture className="terminology__image image">
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
			</picture>
			{Menu}
			<article className="terminology__article">
				<h2 className="terminology__title">the terminology...</h2>
				<h3 className="terminology__name">{terminology?.name}</h3>
				<p className="terminology__description">{terminology?.description}</p>
			</article>
		</div>
	);
}

export default Terminology;
