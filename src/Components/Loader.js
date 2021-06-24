import React from "react";
import Spinner from "../Assets/Spinner.gif";
import "./Loader.css";

function Loader() {
	return (
		<div className="loading-spinner">
			<div className="loader">
				<img src={Spinner} alt="Loading..." />
				<h1>Fetching data...</h1>
			</div>
		</div>
	);
}

export default Loader;
