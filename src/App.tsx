import "@styles/common.scss";
import "./App.scss";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import data from "@data/data.json";
import Nav from "@components/Nav/Nav";
import Home from "@routes/Home/Home";
import Destination from "@routes/destination/Destination";
import Crew from "@routes/crew/Crew";
import Technology from "@routes/technology/Technology";

function App() {
	return (
		<div className="app">
			<BrowserRouter>
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
			</BrowserRouter>
		</div>
	);
}

export default App;
