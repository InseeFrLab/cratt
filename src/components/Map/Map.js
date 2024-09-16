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
    center: [16.23829069647559, -61.45240105961956],
    availableYears: ['2022'],
    extraLayers: [],
  },
  martinique: {
    name: 'MARTINIQUE',
    center: [14.734081775534577, -61.04652836019437],
    availableYears: ['2018', '2020', '2022', '2023'],
    extraLayers: [],
  },
  guyane: {
    name: 'GUYANE',
    center: [5.5468972695980705, -53.67560450109521],
    availableYears: ['2023'],
    extraLayers: [],
  },
  reunion: {
    name: 'REUNION',
    center: [-20.89016606364918, 55.45854339672983],
    availableYears: ['2023'],
    extraLayers: [],
  },
  mayotte: {
    name: 'MAYOTTE',
    center: [-12.819734705957057, 45.15567959194368],
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
    center: [18.07302432618991, -63.05528896277365],
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

  const getWMSTileLayer = (layer) => (
    <WMSTileLayer
      url={url}
      layers={`${geoserverWorkspace}:${layer}`}
      format="image/png"
      transparent={true}
      version="1.1.0"
    />
  );

  return (
    <MapContainer
      className="w-120 h-200"
      center={center}
      zoom={11}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <LayersControl position="topleft">
        {(
          <LayersControl.Overlay name="Ilots" key="ilots">
            {getWMSTileLayer(`${name}_ILOTS`)}
          </LayersControl.Overlay>
        )}

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
