import { mockedData } from "./MockedData";
import axios from "axios";

const mocked = true;

const updateMockedData = () => {
  return Promise.resolve(mockedData);
};

export const getEstimation = (object) => {
  return new Promise((resolve, reject) => {
    if (mocked) {
      updateMockedData()
        .then((value) => resolve(value))
        .catch((err) => {
          reject(err);
        });
    } else null;
  });
};

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
  params: {
    userData,
  },
};

export const getAllEstimation = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(apiUrl, userData, config)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
};
