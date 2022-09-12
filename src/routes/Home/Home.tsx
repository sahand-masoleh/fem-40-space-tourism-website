import { Link } from "react-router-dom";

function Home() {
	return (
		<main className="main home">
			<span className="home__pre-title">So, you want to travel to</span>
			<h1 className="home__title">Space</h1>
			<p className="home__description">
				Let’s face it; if you want to go to space, you might as well genuinely
				go to outer space and not hover kind of on the edge of it. Well sit
				back, and relax because we’ll give you a truly out of this world
				experience! Explore
			</p>
			<Link to="./destination" className="home__button">
				Explore
			</Link>
		</main>
	);
}

export default Home;
