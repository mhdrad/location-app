import type { Map } from "leaflet";

import { useCallback, useEffect, useMemo, useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";

import { useAppDispatch, useAppSelector } from "store/hooks";
import { setLocation } from "store/map";
import { toggleModal } from "store/place";

const AddPlace = () => {
  const { isAddModalOpen } = useAppSelector((state) => state.place);
  const { latitude, longitude } = useAppSelector((state) => state.map);

  const dispatch = useAppDispatch();

  const [map, setMap] = useState<Map>();

  const onMove = useCallback(() => {
    if (!map) return;

    const { lat, lng } = map.getCenter();

    dispatch(setLocation({ lat, lng }));
  }, [map]);

  useEffect(() => {
    map?.on("move", onMove);
    return () => {
      map?.off("move", onMove);
    };
  }, [map, onMove]);

  return (
    <div
      className={["add-place modal", !!isAddModalOpen && "is-active"].join(" ")}
    >
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Wanna add a new Place?</p>
        </header>
        <section className="modal-card-body">
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Name</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input
                    className="input is-danger"
                    type="text"
                    placeholder="e.g. Partnership opportunity"
                  />
                </div>
                <p className="help is-danger">This field is required</p>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Type</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <div className="select is-fullwidth">
                    <select>
                      <option>Business</option>
                      <option>Coffee</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Location</label>
            </div>
            <div className="field-body">
              <div className="field">
                {!!isAddModalOpen && (
                  <MapContainer
                    center={[latitude, longitude]}
                    zoom={16}
                    scrollWheelZoom={false}
                    whenCreated={setMap}
                  >
                    <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />
                    <Marker position={[latitude, longitude]}></Marker>
                  </MapContainer>
                )}
                <p className="help">
                  This map has attached to the main one! So you can find your
                  place faster and you will never create duplicated places
                  anymore.
                </p>
              </div>
            </div>
          </div>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-primary">Save changes</button>
          <button
            className="button"
            onClick={() => dispatch(toggleModal(false))}
          >
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};

export default AddPlace;
