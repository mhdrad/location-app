import type { Map } from "leaflet";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import Navbar from "components/Navbar";
import AddPlace from "components/AddPlace";
import { useAppSelector } from "store/hooks";
import { useEffect, useState } from "react";

function App() {
  const { latitude, longitude, zoom } = useAppSelector((state) => state.map);

  const [map, setMap] = useState<Map>();

  useEffect(() => {
    map?.setView([latitude, longitude]);
  }, [latitude, longitude]);

  return (
    <main className="home">
      <Navbar />
      <AddPlace />
      <div className="home__map">
        <MapContainer
          center={[latitude, longitude]}
          zoom={zoom}
          whenCreated={setMap}
        >
          <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </main>
  );
}

export default App;
