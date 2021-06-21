import './App.css';
import React, { useState, useEffect } from 'react';
import { Map } from './Components/Map';
import Loader from './Components/Loader';

function App() {
  const [event, setEvent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch(
        'https://eonet.sci.gsfc.nasa.gov/api/v2.1/events'
      );
      const { events } = await res.json();

      setEvent(events);
      setLoading(false);
    };
    fetchEvents();
  }, []);

  console.log(event);

  return (
    <div className="App">
      {!loading ? <Map eventData={event} /> : <Loader />}
    </div>
  );
}

export default App;
