import React from "react";
import { MapContainer, WMSTileLayer,TileLayer,LayersControl  } from "react-leaflet";
import 'leaflet/dist/leaflet.css'

const Map = ({departement}) => {
  let layersRaster, layersIlot;

  if (departement === 'martinique') {
    layersRaster = 'MARTINIQUE';
    layersIlot = 'ilots_972';
  } else if (departement === 'guyane') {
    layersRaster = 'GUYANE';
    layersIlot = 'ilots_973';
  } else if (departement === 'guadeloupe') {
    layersRaster = 'GUADELOUPE';
    layersIlot = 'ilots_971';
  }
  console.log("dirag:"+ layersRaster + "_2022")
  return (
    <MapContainer className="w-200 h-300" center={[14.734081775534577, -61.04652836019437]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

    <LayersControl position="topleft">
    <LayersControl.Overlay name="Tuiles VHR">
      <WMSTileLayer
        url="https://geoserver-de-fifou.kub.sspcloud.fr/geoserver/dirag/wms"
        layers={"dirag:"+ layersRaster + "_2022"}
        format="image/png"
        transparent={true}
        version="1.1.0"
      />
      </LayersControl.Overlay>
      <LayersControl.Overlay name="Ilots">
      <WMSTileLayer
        url="https://geoserver-de-fifou.kub.sspcloud.fr/geoserver/dirag/wms"
        layers={"dirag:"+layersIlot}
        format="image/png"
        transparent={true}
        version="1.1.0"
      />
      </LayersControl.Overlay>
      </LayersControl>
    </MapContainer>
  );
};

export default Map;

// MAnque : la dockerisation, manque déplacement
// Manque responsivité, colorthemes darkmode etc..
