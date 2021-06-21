import React from 'react';
import Spinner from '../Assets/Spinner-2.gif';

function Loader() {
  return (
    <div className="loading-spinner">
      <img src={Spinner} alt="Loading..." />
      <h1>Fetching data...</h1>
    </div>
  );
}

export default Loader;
