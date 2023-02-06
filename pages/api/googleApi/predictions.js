import axios from "axios";

const API_KEY = "AIzaSyBhFIY1nvseuxoi4xA0HPiM-PvwNQdx9kI";

export const getAddressPrediction = (address) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${address}&key=${API_KEY}&components=country:fr&types=address`
      )
      .then((res) => {
        resolve(res.data.predictions);
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
