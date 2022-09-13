import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { technology } from "@data/data.json";

interface Props {
	links: JSX.Element[];
}

function Terminology({ links }: Props) {
	const { terminology: slug } = useParams();
	let navigate = useNavigate();

	const termonilogy = technology.find((e) => {
		return e.name.toLowerCase() === slug;
	});

	useEffect(() => {
		if (!termonilogy) {
			navigate("../");
		}
	}, [termonilogy]);

	return (
		<div className="technology">
			{links}
			<div className="termonilogy___image image">
				<picture>
					<source
						className="image__img"
						srcSet={termonilogy?.images.portrait}
						media="(max-width: 640px)"
					/>
					<img
						className="image__img"
						src={termonilogy?.images.landscape}
						alt=""
					/>
				</picture>
			</div>
			<h2 className="termonilogy__name">{termonilogy?.name}</h2>
			<p className="termonilogy__description">{termonilogy?.description}</p>
		</div>
	);
}

export default Terminology;
