import React from 'react';
import {
  MapContainer,
  WMSTileLayer,
  TileLayer,
  LayersControl,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Define a mapping of departments to their respective properties
const DEPARTEMENT_CONFIG = {
  guadeloupe: {
    name: 'GUADELOUPE',
    center: [16.24017721021727, -61.532192586122505],
    availableYears: ['2022'],
    extraLayers: [],
  },
  martinique: {
    name: 'MARTINIQUE',
    center: [14.617309427411936, -61.055614179640365],
    availableYears: ['2022'],
    extraLayers: [],
  },
  guyane: {
    name: 'GUYANE',
    center: [4.9370292615282905, -52.325762983835325],
    availableYears: ['2023'],
    extraLayers: [],
  },
  reunion: {
    name: 'REUNION',
    center: [-20.88545500487541, 55.452336559309124],
    availableYears: ['2023'],
    extraLayers: [],
  },
  mayotte: {
    name: 'MAYOTTE',
    center: [-12.78081553844026, 45.227656507434695],
    availableYears: ['2023'],
    extraLayers: [
      {
        name: 'creation 2020-2023',
        layer: 'creation_MAYOTTE_2020_2023',
      },
    ],
  },
  "saint-martin": {
    name: 'SAINT-MARTIN',
    center: [18.069731661621365, -63.07923112942898],
    availableYears: ['2024'],
    extraLayers: [],
  },
};

const Map = ({ departement }) => {
  const config = DEPARTEMENT_CONFIG[departement] || {};

  const {
    name,
    center,
    availableYears,
    extraLayers,
  } = config;
  
  const url = 'https://geoserver-satellite-images.lab.sspcloud.fr/geoserver/dirag/wms';
  const geoserverWorkspace = 'dirag';

  const getWMSTileLayer = (layer, opacity = 1) => (
    <WMSTileLayer
      url={url}
      layers={`${geoserverWorkspace}:${layer}`}
      format="image/png"
      transparent={true}
      version="1.1.0"
      opacity={opacity}
    />
  );

  return (
      <MapContainer
        className="w-120 h-200"
        center={center}
        zoom={14}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <LayersControl position="topleft">
          <LayersControl.Overlay name="Ilots" key="ilots">
            {getWMSTileLayer(`${name}_ILOTS`)}
          </LayersControl.Overlay>

          {availableYears.map((year) => (
            <React.Fragment key={year}>
              <LayersControl.Overlay name={`PLEIADES ${year}`}>
                {getWMSTileLayer(`${name}_${year}`)}
              </LayersControl.Overlay>
              <LayersControl.Overlay name={`Prediction ${year}`}>
                {getWMSTileLayer(`${name}_PREDICTIONS_${year}`)}
              </LayersControl.Overlay>
            </React.Fragment>
          ))}

          {extraLayers.map(({ name, layer }) => (
            <LayersControl.Overlay name={name} key={layer}>
              {getWMSTileLayer(layer)}
            </LayersControl.Overlay>
          ))}
        </LayersControl>
      </MapContainer>
  );
};

export default Map;

// MAnque : la dockerisation, manque déplacement
// Manque responsivité, colorthemes darkmode etc..
