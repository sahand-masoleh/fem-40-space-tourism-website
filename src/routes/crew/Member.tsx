import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { crew } from "@data/data.json";
import trimName from "@utils/trimName";
import { AnimatePresence, motion } from "framer-motion";
import { articleTransition } from "@styles/transitions";

interface Props {
	Menu: JSX.Element;
}

function Member({ Menu }: Props) {
	const { member: slug } = useParams();
	let navigate = useNavigate();

	const member = crew.find((e) => trimName(e.name) === slug);

	useEffect(() => {
		if (!member) {
			navigate("../");
		}
	}, [member]);

	return (
		<div className="member">
			<motion.article
				className="member__article"
				key={slug + "-article"}
				{...articleTransition(0.1)}
			>
				<h2 className="member__role">{member?.role}</h2>
				<h3 className="member__name">{member?.name}</h3>
				<p className="member__bio">{member?.bio}</p>
			</motion.article>
			{Menu}
			<motion.div
				className="member__image image"
				key={slug + "-image"}
				{...articleTransition(0.25)}
			>
				<img
					src={member?.images.webp}
					alt=""
					className="image__img member__img"
				/>
			</motion.div>
		</div>
	);
}

export default Member;
