import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { crew } from "@data/data.json";

interface Props {
	links: JSX.Element[];
}

function Member({ links }: Props) {
	const { member: slug } = useParams();
	let navigate = useNavigate();

	const member = crew.find((e) => e.name.toLowerCase() === slug);

	useEffect(() => {
		if (!member) {
			navigate("../");
		}
	}, [member]);

	return (
		<div className="crew">
			{links}
			<div className="member___image image">
				<img src={member?.images.webp} alt="" className="image__img" />
			</div>
			<h2 className="member__name">{member?.name}</h2>
			<p className="member__bio">{member?.bio}</p>
		</div>
	);
}

export default Member;
