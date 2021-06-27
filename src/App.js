import "./App.css";
import React, { useState, useEffect, useContext } from "react";
import { Map } from "./Components/Map";
import Loader from "./Components/Loader";
import Header from "./Components/Header";
import LeftSection from "./Components/LeftSection";
import RightSection from "./Components/RightSection";
import { MapContext } from "./Components/MapContext";

function App() {
	const [event, setEvent] = useState([]);
	const [loading, setLoading] = useState(false);
	const [openMenu, setOpenMenu] = useState(false);
	const [eventId, setEventId] = useState(8);
	const value = 10;

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

	return (
		<div className="App">
			<Header />
			<MapContext.Provider value={{ eventId, setEventId }}>
				{!loading ? <LeftSection menu={openMenu} /> : null}
				{!loading ? <Map eventData={event} /> : <Loader />}
			</MapContext.Provider>

			{!loading ? <RightSection /> : null}
		</div>
	);
}

export default App;
