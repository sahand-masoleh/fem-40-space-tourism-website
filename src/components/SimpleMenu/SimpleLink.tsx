import { NavLink } from "react-router-dom";

interface Props {
	className: string;
	path: string;
	children: JSX.Element;
}

function SimpleLink({ className, path, children }: Props) {
	return (
		<NavLink
			className={({ isActive }) =>
				`${className} ${className} ${isActive ? className + "--active" : ""}`
			}
			to={`../${path}`}
		>
			{children}
		</NavLink>
	);
}

export default SimpleLink;
