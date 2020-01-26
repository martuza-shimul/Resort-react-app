import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

function App() {
	return (
		<>
			<h1>
				<Home></Home>
				<Rooms></Rooms>
				<SingleRoom></SingleRoom>
				<Error></Error>
			</h1>
		</>
	);
}

export default App;
