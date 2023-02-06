import axios from "axios";

const API_KEY = "AIzaSyBhFIY1nvseuxoi4xA0HPiM-PvwNQdx9kI";

export const getCoordinateOfAddress = (address) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${address}&key=AIzaSyBhFIY1nvseuxoi4xA0HPiM-PvwNQdx9kI&inputtype=textquery&fields=geometry`
      )
      .then((res) => {
        resolve({
          lat: res.data.candidates[0].geometry.location.lat,
          lng: res.data.candidates[0].geometry.location.lng,
        });
      })
      .catch((error) => reject(error));
  });
};

export const getAddressPrediction = (address) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${address}&key=${API_KEY}&components=country:fr&types=address`
      )
      .then((res) => {
        console.log("ok");
        resolve(res.data.prediction);
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          reject(error.message);
        } else {
          reject(error);
        }
      });
  });
};
