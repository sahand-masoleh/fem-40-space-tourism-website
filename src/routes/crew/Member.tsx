import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { crew } from "@data/data.json";
import trimName from "@utils/trimName";

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
			<article className="member__article">
				<h2 className="member__role">{member?.role}</h2>
				<h3 className="member__name">{member?.name}</h3>
				<p className="member__bio">{member?.bio}</p>
				{Menu}
			</article>
			<div className="member__image image">
				<img src={member?.images.webp} alt="" className="image__img" />
			</div>
		</div>
	);
}

export default Member;
