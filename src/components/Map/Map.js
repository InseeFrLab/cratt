import React from "react";
import {
  MapContainer,
  WMSTileLayer,
  TileLayer,
  LayersControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";


const Map = ({ departement }) => {
  let layersRaster, layersIlot, center, layersPred;

  const url = "https://geoserver-satellite-images.lab.sspcloud.fr/geoserver/dirag/wms";
  const geoserverWorkspace = "dirag";

  if (departement === "martinique") {
    layersRaster = "MARTINIQUE";
    layersIlot = "ilots_972";
    layersPred = "pred_MARTINIQUE";
    center = [14.734081775534577, -61.04652836019437];
  } else if (departement === "guyane") {
    layersRaster = "GUYANE";
    layersIlot = "ilots_973";
    layersPred = "pred_GUYANE";
    center = [5.5468972695980705, -53.67560450109521];
  } else if (departement === "guadeloupe") {
    layersRaster = "GUADELOUPE";
    layersIlot = "ilots_971";
    layersPred = "pred_GUADELOUPE";
    center = [16.23829069647559, -61.45240105961956];
  } else if (departement === "mayotte") {
    layersRaster = "MAYOTTE";
    layersIlot = "ilots_976";
    layersPred = "pred_MAYOTTE";
    center = [-12.819734705957057, 45.15567959194368];
  } else if (departement === "reunion") {
    layersRaster = "REUNION";
    layersIlot = "ilots_974";
    layersPred = "pred_REUNION";
    center = [-20.89016606364918, 55.45854339672983];
  } else if (departement === "saint-martin") {
    layersRaster = "SAINT-MARTIN";
    layersPred = "pred_SAINT-MARTIN";
    center = [18.07302432618991, -63.05528896277365]; 
  }

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
     
        {["2018","2020", "2022","2023"].map((year) => (
          <LayersControl.Overlay name={`PLEIADE ${year}`} key={year}>
            <WMSTileLayer
              url={url}
              layers={`${geoserverWorkspace}:PLEIADE_${layersRaster}_${year}`}
              format="image/png"
              transparent={true}
              version="1.1.0"
            />
          </LayersControl.Overlay>
        ))}
           <LayersControl.Overlay name="Ilots">
          <WMSTileLayer
            url={url}
            layers={geoserverWorkspace + ":" + layersIlot}
            format="image/png"
            transparent={true}
            version="1.1.0"
          />
        </LayersControl.Overlay>
   
        {["2018","2019","2020", "2022", "2023"].map((year) => (
          <LayersControl.Overlay name={`prediction ${year}`} key={year}>
            <WMSTileLayer
              url={url}
              layers={`${geoserverWorkspace}:${layersPred}_${year}`}
              format="image/png"
              transparent={true}
              version="1.1.0"
            />
          </LayersControl.Overlay>
        ))}

{departement === "mayotte" && (
  <>
    <LayersControl.Overlay name={`creation 2020-2023`}>
      <WMSTileLayer
        url={url}
        layers={`${geoserverWorkspace}:creation_MAYOTTE_2020_2023`}
        format="image/png"
        transparent={true}
        version="1.1.0"
      />
    </LayersControl.Overlay>
    <LayersControl.Overlay name={`suppression 2020-2023`}>
      <WMSTileLayer
        url={url}
        layers={`${geoserverWorkspace}:suppression_MAYOTTE_2020_2023`}
        format="image/png"
        transparent={true}
        version="1.1.0"
      />
    </LayersControl.Overlay>

    <LayersControl.Overlay name={`prediction clean 2023`} key ="coucou">
            <WMSTileLayer
              url={url}
              layers={`${geoserverWorkspace}:pred_clean_MAYOTTE_2023`}
              format="image/png"
              transparent={true}
              version="1.1.0"
            />
    </LayersControl.Overlay>
  </>
)}


{departement === "saint-martin" && (
  <>
    <LayersControl.Overlay name={`PLEIADE 2024`}>
      <WMSTileLayer
        url={url}
        layers={`${geoserverWorkspace}:PLEIADE_SAINT-MARTIN_2024`}
        format="image/png"
        transparent={true}
        version="1.1.0"
      />
    </LayersControl.Overlay>
  
    <LayersControl.Overlay name={`prediction 2024`} key ="sxm">
            <WMSTileLayer
              url={url}
              layers={`${geoserverWorkspace}:pred_SAINT-MARTIN_2024`}
              format="image/png"
              transparent={true}
              version="1.1.0"
            />
    </LayersControl.Overlay>
  </>
)}

    </LayersControl>
    </MapContainer>
  );
};

export default Map;

// MAnque : la dockerisation, manque déplacement
// Manque responsivité, colorthemes darkmode etc..
