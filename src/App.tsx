import "@styles/common.scss";
import "./App.scss";

import {
	BrowserRouter,
	Routes,
	Route,
	Navigate,
	useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import data from "@data/data.json";
import Nav from "@components/Nav/Nav";
import Home from "@routes/Home/Home";
import Destination from "@routes/destination/Destination";
import Crew from "@routes/crew/Crew";
import Technology from "@routes/technology/Technology";

function App() {
	return (
		<BrowserRouter>
			<AnimationWrapper>
				<Nav />
				<Routes>
					<Route path="/home" element={<Home />}></Route>
					<Route
						path="/destination/*"
						element={<Destination destinations={data.destinations} />}
					></Route>
					<Route path="/crew/*" element={<Crew crew={data.crew} />}></Route>
					<Route
						path="/technology/*"
						element={<Technology technology={data.technology} />}
					></Route>
					<Route path="/*" element={<Navigate to="/home"></Navigate>}></Route>
				</Routes>
			</AnimationWrapper>
		</BrowserRouter>
	);
}

export default App;

interface AnimationWrapperable {
	children: React.ReactElement[];
}

function AnimationWrapper({ children }: AnimationWrapperable) {
	const location = useLocation();
	return (
		<AnimatePresence mode="wait">
			<div className="app" data-background={location.pathname.split("/")[1]}>
				{children}
			</div>
		</AnimatePresence>
	);
}
