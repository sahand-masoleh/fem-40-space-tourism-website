import "./Home.scss";
import { Link } from "react-router-dom";

function Home() {
	return (
		<main className="main home">
			<div className="home__background"></div>
			<span className="home__pre-title">so, you want to travel to</span>
			<h1 className="home__title">space</h1>
			<p className="home__description">
				Let’s face it; if you want to go to space, you might as well genuinely
				go to outer space and not hover kind of on the edge of it. Well sit
				back, and relax because we’ll give you a truly out of this world
				experience!
			</p>
			<Link to="./destination" className="home__button">
				explore
			</Link>
		</main>
	);
}

export default Home;
