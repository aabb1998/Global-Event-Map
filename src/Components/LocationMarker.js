import React from "react";
import { Icon, InlineIcon } from "@iconify/react";
import baselineLocalFireDepartment from "@iconify-icons/ic/baseline-local-fire-department";
import thunderstormIcon from "@iconify-icons/ion/thunderstorm";

function LocationMarker({ id, lat, lng, date, onClick }) {
	return (
		<div className="location-marker" onClick={onClick}>
			{id.categories[0].id === 8 ? (
				<Icon icon={baselineLocalFireDepartment} />
			) : (
				<Icon className="thunder-icon" icon={thunderstormIcon} />
			)}
		</div>
	);
}

export default LocationMarker;
