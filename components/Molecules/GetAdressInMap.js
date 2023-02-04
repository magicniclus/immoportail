import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import { useSelector } from "react-redux";

const GetAdressInMap = (props) => {
  // Image personnalisée pour le marqueur
  const customMarker = "/vector/localizationHouse.png";

  // Etat pour savoir si le script a été chargé
  const [scriptLoaded, setScriptLoaded] = useState(false);

  // Accès à l'état global de l'application
  const state = useSelector((state) => state);

  // Style pour le conteneur de la carte
  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  // Centre de la carte, basé sur les coordonnées de l'adresse
  const center = {
    lat:
      state.addressCoordinate !== null ? state.addressCoordinate.lat : 48.8566,
    lng:
      state.addressCoordinate !== null ? state.addressCoordinate.lng : 2.3522,
  };

  // Options pour la carte
  const options = {
    disableDefaultUI: true,
    zoomControl: false,
  };

  // Utilisation d'un effet pour mettre à jour l'état de chargement du script lorsque les coordonnées de l'adresse changent
  useEffect(() => {
    if (
      window.google &&
      state.address !== "" &&
      state.addressCoordinate !== null
    ) {
      setScriptLoaded(true);
    }
  }, [state.addressCoordinate, state.address]);

  // Fonction qui renvoie la carte de chargement
  const getLoading = () => {
    return (
      <LoadScript googleMapsApiKey="AIzaSyBhFIY1nvseuxoi4xA0HPiM-PvwNQdx9kI">
        <GoogleMap
          id="map"
          mapContainerStyle={containerStyle}
          zoom={18}
          center={center}
          options={options}
          style={{ zIndex: 0 }}
        ></GoogleMap>
      </LoadScript>
    );
  };

  // Fonction qui renvoie la carte
  const getComponent = () => {
    return (
      <GoogleMap
        id="map"
        mapContainerStyle={containerStyle}
        zoom={18}
        center={center}
        options={options}
        style={{ zIndex: 0 }}
      >
        {/* <Marker position={center} /> */}
      </GoogleMap>
    );
  };

  // Affiche soit la carte de chargement soit la carte elle-même en fonction de l'état de chargement
  return (
    <div className="h-48 w-11/12 bg-white shadow-[inset_0px_0px_15px_30px_#FAFAFA]">
      {!scriptLoaded ? getLoading() : getComponent()}
    </div>
  );
};

export default GetAdressInMap;
