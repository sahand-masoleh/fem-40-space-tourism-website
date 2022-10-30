import "./Home.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { pageTransition } from "@styles/transitions";

function Home() {
	return (
		<motion.main className="main" {...pageTransition()}>
			<div className="main__content home">
				<article className="home__article">
					<span className="home__pre-title">so, you want to travel to</span>
					<h1 className="home__title">space</h1>
					<p className="home__description">
						Let’s face it; if you want to go to space, you might as well
						genuinely go to outer space and not hover kind of on the edge of it.
						Well sit back, and relax because we’ll give you a truly out of this
						world experience!
					</p>
				</article>
				<Link to="/destination" className="home__button">
					explore
				</Link>
			</div>
		</motion.main>
	);
}

export default Home;
