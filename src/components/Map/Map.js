import React from "react";
import { MapContainer, WMSTileLayer,TileLayer,LayersControl  } from "react-leaflet";
import 'leaflet/dist/leaflet.css'

const Map = ({departement}) => {
  let layersRaster, layersIlot, center,layersPred_2020, layersPred_2022;

  if (departement === 'martinique') {
    layersRaster = 'MARTINIQUE';
    layersIlot = 'ilots_972';
    layersPred_2020 = 'pred_MARTINIQUE_2020'
    layersPred_2022 = 'pred_MARTINIQUE_2022'
    center = [14.734081775534577, -61.04652836019437]
  } else if (departement === 'guyane') {
    layersRaster = 'GUYANE';
    layersIlot = 'ilots_973';
    layersPred_2020 = 'pred_GUYANE_2020'
    layersPred_2022 = 'pred_GUYANE_2022'
    center = [5.5468972695980705, -53.67560450109521]
  } else if (departement === 'guadeloupe') {
    layersRaster = 'GUADELOUPE';
    layersIlot = 'ilots_971';
    layersPred_2020 = 'pred_GUADELOUPE_2020'
    layersPred_2022 = 'pred_GUADELOUPE_2022'
    center = [16.23829069647559, -61.45240105961956]
  } else if (departement === 'mayotte') {
    layersRaster = 'MAYOTTE';
    layersIlot = 'ilots_976';
    layersPred_2020 = 'pred_MAYOTTE_2020'
    layersPred_2022 = 'pred_MAYOTTE_2022'
    center =[-12.819734705957057, 45.15567959194368]
  } 
  console.log("dirag:"+ layersRaster + "_2022")
  return (
    <MapContainer className="w-200 h-300" center={center} zoom={11} scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

    <LayersControl position="topleft">
    <LayersControl.Overlay name="Tuiles VHR 2022">
      <WMSTileLayer
        url="https://geoserver-de-fifou.kub.sspcloud.fr/geoserver/dirag/wms"
        layers={"dirag:"+ layersRaster + "_2022"}
        format="image/png"
        transparent={true}
        version="1.1.0"
      />
      </LayersControl.Overlay>
      <LayersControl.Overlay name="Tuiles VHR 2020">
      <WMSTileLayer
        url="https://geoserver-de-fifou.kub.sspcloud.fr/geoserver/dirag/wms"
        layers={"dirag:"+ layersRaster + "_2020"}
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
      <LayersControl.Overlay name="pred_2020">
      <WMSTileLayer
        url="https://geoserver-de-fifou.kub.sspcloud.fr/geoserver/dirag/wms"
        layers={"dirag:"+layersPred_2020}
        format="image/png"
        transparent={true}
        version="1.1.0"
      />
      </LayersControl.Overlay>
      <LayersControl.Overlay name="pred_2022">
      <WMSTileLayer
        url="https://geoserver-de-fifou.kub.sspcloud.fr/geoserver/dirag/wms"
        layers={"dirag:"+layersPred_2022}
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
