import React from "react";
import "./LeftSection.css";
import locationImage from "../Assets/image 4.svg";
import StormImage from "../Assets/image 1.svg";
import wildfireImage from "../Assets/image 2.svg";
import VolcanoImage from "../Assets/pngaaa.svg";
import NasaImage from "../Assets/image 3.svg";
import MenuImage from "../Assets/6Tp5r7aRc.svg";

function LeftSection() {
	return (
		<div className="left-section">
			<div className="location">
				<img src={locationImage} alt="" />
			</div>
			<div className="event-options">
				<img src={wildfireImage} alt="" />
				<img src={StormImage} alt="" />
				<img src={VolcanoImage} alt="" />
			</div>
			<div className="section-bottom">
				<img src={MenuImage} alt="" />
				<img src={NasaImage} alt="" />
			</div>
		</div>
	);
}

export default LeftSection;
