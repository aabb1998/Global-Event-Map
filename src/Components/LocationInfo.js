import React, { useEffect, useState } from "react";
import image1 from "../Assets/image 5.png";
import image2 from "../Assets/image 6.png";
import image3 from "../Assets/info-xxl.png";
import "./LocationInfo.css";

function LocationInfo({ info }) {
	console.log(info);
	return (
		<div className="location-info">
			<div className="location-header">
				<img src={image1} alt="" />
				<h2>{info.title}</h2>
			</div>

			<ul>
				<li>
					<img src={image2} alt="" />
					{info.title}
				</li>
				<li className="location-li">
					<img className="info-icon" src={image3} alt="" />
					{info.id}
				</li>
			</ul>
		</div>
	);
}

export default LocationInfo;
