import React from "react";
import { Icon, InlineIcon } from "@iconify/react";
import baselineLocalFireDepartment from "@iconify-icons/ic/baseline-local-fire-department";
import thunderstormIcon from "@iconify-icons/ion/thunderstorm";
import MenuImage from "../Assets/6Tp5r7aRc.svg";
import "../App.css";
import volcanoIcon from "@iconify-icons/maki/volcano";

function LocationMarker({ id, lat, lng, date, onClick }) {
	return (
		<div className="location-marker" onClick={onClick}>
			{id.categories[0].id === 8 ? (
				<Icon
					className="wildfire-icon"
					icon={baselineLocalFireDepartment}
				/>
			) : id.categories[0].id === 10 ? (
				<Icon className="thunder-icon" icon={thunderstormIcon} />
			) : id.categories[0].id === 12 ? (
				<Icon className="volcano-icon" icon={volcanoIcon} />
			) : (
				<Icon
					className="thunder-icon"
					icon={baselineLocalFireDepartment}
				/>
			)}
		</div>
	);
}

export default LocationMarker;
