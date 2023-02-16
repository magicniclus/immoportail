import axios from "axios";

// Récupération des données de l'utilisateur
const userData = {
  lon: 2.294481,
  lat: 48.85837,
  propertyType: 0,
  propertySurface: 72,
  roomNb: 3,
  bedroomNb: 2,
  floor: 3,
  floorNb: 2,
  gardenSurface: 0,
};

// Configuration de la requête
const apiKey = "c7e6b36c05049c7d57a18b2af71455839818fd4f"; // Remplacez YOUR_API_KEY par votre clé d'API réelle
const apiDomain = "https://www.avenue-immo.com/"; // Remplacez YOUR_API_DOMAIN par votre domaine API réel
const apiUrl = `https://bdvapis.appspot.com/estimation/v3.0.0/transaction`;

const config = {
  headers: {
    Authorization: `Bearer ${apiKey}`,
    Origin: apiDomain,
  },
  params:{
    userData
  }
};

// Envoi de la requête avec les données de l'utilisateur

export getEstimation = ()=>{ 
    axios
      .post(apiUrl, userData, config)
      .then((response) => {
        console.log(response.data);
        // Faire quelque chose avec la réponse de l'API
      })
      .catch((error) => {
        console.error(error);
        // Gérer l'erreur de la requête
      });
  }
