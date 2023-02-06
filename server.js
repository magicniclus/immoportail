const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/api/places/autocomplete", async (req, res) => {
  const { address } = req.query;
  const API_KEY = "AIzaSyBhFIY1nvseuxoi4xA0HPiM-PvwNQdx9kI";
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
