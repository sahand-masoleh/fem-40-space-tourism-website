import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface Props {
	className: string;
	path: string;
	children: JSX.Element;
}

function SimpleLink({ className, path, children }: Props) {
	const { pathname } = useLocation();
	const [active, setActive] = useState<boolean>(false);

	useEffect(() => {
		if (!!pathname.match(new RegExp(`${path}`))) {
			setActive(true);
		} else {
			setActive(false);
		}
	}, [pathname]);

	return (
		<Link
			className={`${className} ${className} ${
				active ? className + "--active" : ""
			}`}
			to={`../${path}`}
		>
			{children}
		</Link>
	);
}

export default SimpleLink;
