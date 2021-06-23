import React from "react";
import StormImage from "../Assets/image 1.svg";
import wildfireImage from "../Assets/image 2.svg";
import VolcanoImage from "../Assets/pngaaa.svg";
import "./RightSection.css";

function RightSection() {
	return (
		<div className="right-section">
			<div className="images">
				<img src={wildfireImage} alt="" />
				<img src={StormImage} alt="" />
				<img src={VolcanoImage} alt="" />
			</div>
		</div>
	);
}

export default RightSection;
