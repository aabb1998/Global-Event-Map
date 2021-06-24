import "./App.css";
import React, { useState, useEffect } from "react";
import { Map } from "./Components/Map";
import Loader from "./Components/Loader";
import Header from "./Components/Header";
import LeftSection from "./Components/LeftSection";
import RightSection from "./Components/RightSection";

function App() {
	const [event, setEvent] = useState([]);
	const [loading, setLoading] = useState(false);
	const [openMenu, setOpenMenu] = useState(false);

	console.log(openMenu);

	useEffect(() => {
		const fetchEvents = async () => {
			setLoading(true);
			const res = await fetch(
				"https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
			);
			const { events } = await res.json();

			setEvent(events);
			setLoading(false);
		};
		fetchEvents();
	}, []);

	console.log(event);

	return (
		<div className="App">
			<Header />
			{!loading ? <LeftSection menu={openMenu} /> : null}
			{!loading ? <Map eventData={event} /> : <Loader />}
			{!loading ? <RightSection /> : null}
		</div>
	);
}

export default App;
