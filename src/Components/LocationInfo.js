import React from 'react';

function LocationInfo({ info }) {
  return (
    <div className="location-info">
      <h2>Event location Info</h2>
      <ul>
        <li>{info.title}</li>
        <li>{info.id}</li>
      </ul>
    </div>
  );
}

export default LocationInfo;
