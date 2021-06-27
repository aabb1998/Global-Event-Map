import "./LeftSection.css";
import locationImage from "../Assets/image 4.svg";
import StormImage from "../Assets/image 1.svg";
import wildfireImage from "../Assets/image 2.svg";
import VolcanoImage from "../Assets/pngaaa.svg";
import NasaImage from "../Assets/image 3.svg";
import MenuImage from "../Assets/6Tp5r7aRc.svg";
import menuCloseImage from "../Assets/image 14.svg";
import React, { useEffect, useState, useContext } from "react";
import { Map } from "./Map";
import { MapContext } from "./MapContext";

function LeftSection({ menu }) {
	const [openMenu, setOpenMenu] = useState(menu);
	const [currentEvent, setCurrentEvent] = useState(8);
	const { eventId, setEventId } = useContext(MapContext);

	console.log(eventId);

	const changeMenu = () => {
		if (openMenu) {
			setOpenMenu(false);
			console.log(openMenu);
		} else {
			setOpenMenu(true);
		}
	};

	const wildfireBtnClick = () => {
		setCurrentEvent(8);
		console.log("wildfire");
	};

	const stormBtnClick = () => {
		setCurrentEvent(10);
		console.log("storm");
	};

	return (
		<div className={openMenu ? "left-section-open" : "left-section"}>
			<div className="location">
				<img src={locationImage} alt="" />
				{openMenu ? <h2>Use Location</h2> : null}
			</div>
			<div className="event-options">
				<div className="event" onClick={() => setEventId(8)}>
					<img src={wildfireImage} alt="" />
					{openMenu ? <h2>Wildfires</h2> : null}
				</div>
				<div className="event" onClick={() => setEventId(10)}>
					<img src={StormImage} alt="" />
					{openMenu ? <h2>Storms</h2> : null}
				</div>
				<div className="event" onClick={() => setEventId(12)}>
					<img src={VolcanoImage} alt="" />
					{openMenu ? <h2>Volcanoes</h2> : null}
				</div>
			</div>
			<div className="section-bottom">
				<div className="nasa-image-open">
					<a
						href="https://eonet.sci.gsfc.nasa.gov/what-is-eonet"
						target="_blank"
						rel="noreferrer"
					>
						<img src={MenuImage} alt="" />
					</a>
					{openMenu ? (
						<h3 className="nasa-text">Powered By NASA</h3>
					) : null}
				</div>
				<img
					src={openMenu ? menuCloseImage : NasaImage}
					className={
						openMenu
							? "menu-open section-bottom menu-open-img"
							: "menu-close section-bottom"
					}
					onClick={changeMenu}
					alt=""
				/>
			</div>
		</div>
	);
}

export default LeftSection;
