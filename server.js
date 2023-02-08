const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(
  process.env.NEXT_PUBLIC_PORT
    ? cors({
        origin: ["http://avenue-immo.com", "https://avenue-immo.com"],
      })
    : cors()
);
const API_KEY = "AIzaSyBhFIY1nvseuxoi4xA0HPiM-PvwNQdx9kI";

app.get("/api/places/autocomplete", async (req, res) => {
  const { address } = req.query;
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${address}&key=${API_KEY}&components=country:fr&types=address`
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
});

app.get("/api/coordinate", async (req, res) => {
  const { address } = req.query;
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${address}&key=${API_KEY}&inputtype=textquery&fields=geometry`
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
});

const PORT = process.env.NEXT_PUBLIC_PORT || 3005;

console.log("PORT: " + process.env.NEXT_PUBLIC_PORT);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
