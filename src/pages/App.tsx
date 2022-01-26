import type { Map } from "leaflet";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { useAppSelector } from "store/hooks";
import { useGetPlacesQuery } from "services/places";

import Navbar from "components/Navbar";
import AddPlace from "components/AddPlace";

function App() {
  const { latitude, longitude, zoom } = useAppSelector((state) => state.map);

  const [map, setMap] = useState<Map>();

  // TODO: show spinner on isLoading
  const { data, error, isLoading } = useGetPlacesQuery({ latitude, longitude });

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

          {data?.map((place) => (
            <Marker position={[place.latitude, place.longitude]}>
              <Popup>
                Name: {place.name},<br />
                Type: {place.type}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </main>
  );
}

export default App;
