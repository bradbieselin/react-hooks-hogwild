import React, { useState } from "react";
import Nav from "./Nav";
import HogTiles from "./HogTiles";
import FilterButtons from "./FilterButtons";

import hogs from "../porkers_data";

function App() {
	const [hogsToDisplay, setHogsToDisplay] = useState([...hogs]);

	return (
		<div className="App">
			<Nav />
			<FilterButtons setHogsToDisplay={setHogsToDisplay} hogsToDisplay={hogsToDisplay} hogs={hogs} />
			<HogTiles hogsToDisplay={hogsToDisplay} />
		</div>
	);
}

export default App;
