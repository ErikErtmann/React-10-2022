import { useState } from 'react';
import Map from '../components/map/Map';


function Shops() {
  const [coordinaates, setCoordinates] = 
    useState({lngLat: [58.8468, 25.7185], zoom: 7});


  return (<div>
    <button onClick={() => 
        setCoordinates({lngLat: [58.8468, 25.7185], zoom: 7})}>Kõik poed</button>
    <br/>
    <button onClick={() => 
        setCoordinates({lngLat: [59.4378, 24.7574], zoom: 11})}>Kõik Tallinna poed</button>
    <button onClick={() => 
        setCoordinates({lngLat: [59.4231, 24.7991], zoom: 13})}>Ülemiste</button>
    <button onClick={() => 
        setCoordinates({lngLat: [59.4277, 24.7193], zoom: 13})}>Kristiine</button>
    <br/>
    <button onClick={() => 
        setCoordinates({lngLat: [58.3767, 26.7260], zoom: 11})}>Kõik Tartu poed</button>
    <button onClick={() => 
        setCoordinates({lngLat: [58.3581, 26.6782], zoom: 13})}>Lõunakeskus</button>
    <button onClick={() => 
        setCoordinates({lngLat: [58.3779, 26.7311], zoom: 13})}>Tasku</button>

    <Map mapCoordinaates={coordinaates}  />

  </div>)
}

export default Shops;