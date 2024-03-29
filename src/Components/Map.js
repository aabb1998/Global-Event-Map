import React, { useEffect, useState, useContext } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import axios from "axios";
import LocationInfo from "./LocationInfo";
import { MapContext } from "./MapContext";
import { LocationContext } from "./LocationContext";
require("dotenv").config();

export const Map = ({ eventData, center, zoom }) => {
	const [locationInfo, setLocationInfo] = useState(null);
	const [eventType, setEventType] = useState(8); //default
	const { eventId, setEventId } = useContext(MapContext);
	const { userLocation, setUserLocation } = useContext(LocationContext);
	const [changeLocation, setChangeLocation] = useState(false);
	const url = process.env.REACT_APP_MAP_KEY;
	console.log(url);

	useEffect(() => {}, [eventId]);

	const markers = eventData.map((event) => {
		if (event.categories[0].id === eventId && event.id !== "EONET_354") {
			const coords = {
				eventLat: event.geometries[0].coordinates[1],
				eventLon: event.geometries[0].coordinates[0],
				id: event,
			};
			return (
				<LocationMarker
					lat={coords.eventLat}
					lng={coords.eventLon}
					id={coords.id}
					date={coords.date}
					onClick={() =>
						setLocationInfo({
							id: event.id,
							title: event.title,
							date: event.date,
						})
					}
				/>
			);
		}
		return null;
	});

	console.log({ userLocation });

	return (
		<div className="map-section">
			<GoogleMapReact
				bootstrapURLKeys={{
					key: url,
				}}
				defaultCenter={userLocation.center}
				defaultZoom={zoom}
			>
				{markers}
			</GoogleMapReact>
			{locationInfo && <LocationInfo info={locationInfo} />}
			{/* {changeLocation ? newCenter : null} */}
		</div>
	);
};

Map.defaultProps = {
	center: {
		lat: 42.3265,
		lng: -122.9,
	},
	zoom: 6,
};
