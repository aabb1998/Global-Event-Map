import React, { useEffect, useState, useContext } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import axios from "axios";
import LocationInfo from "./LocationInfo";
import { MapContext } from "./MapContext";

export const Map = ({ eventData, center, zoom }) => {
	const [locationInfo, setLocationInfo] = useState(null);
	const [eventType, setEventType] = useState(8); //default
	const { eventId, setEventId } = useContext(MapContext);

	const markers = eventData.map((event) => {
		if (event.categories[0].id === eventId) {
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

	return (
		<div className="map-section">
			<GoogleMapReact
				bootstrapURLKeys={{
					key: "AIzaSyDxhwG8T7H-UblnT1Cw8sQm36LuyZyKTiY",
				}}
				defaultCenter={center}
				defaultZoom={zoom}
			>
				{markers}
			</GoogleMapReact>
			{locationInfo && <LocationInfo info={locationInfo} />}
			{/* <div className="button-section">
				<button className="storm-btn" onClick={stormBtnClick}>
					Storms
				</button>
				<button className="wildfire-btn" onClick={wildfireBtnClick}>
					Wildfire
				</button>
				<button
					className="wildfire-btn"
					onClick={() => setLocationInfo(null)}
				>
					Remove Info
				</button>
			</div> */}
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
