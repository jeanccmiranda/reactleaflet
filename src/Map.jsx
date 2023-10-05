import {React, useState} from 'react';
import stations from './estacoes.json'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


function Map({onPopUpClick}) {

  

  return (
    <MapContainer  className="map" center={[-25.4364, -49.25999999999988]} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {stations.features.map(station => (
        <Marker key={station.properties.EST_ID} position={[station.geometry.coordinates[1], station.geometry.coordinates[0]]} >
        <Popup >
            <div className="marker_popup">
              <h2><strong>Estação: </strong>{station.properties.NOME}</h2>
              <h2><strong>Código:  </strong>{station.properties.CODIGO}</h2>
              <button className="btn_details" onClick={onPopUpClick}>detalhes</button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Map;