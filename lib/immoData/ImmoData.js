const API_KEY =
  "eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjoiNjNjMmYyYzkzNjFmODA3MWU4NTY5ZDYwIiwidGltZSI6MTY3MzcyMDU1Ni43MzM2MDI1fQ.rOubpcaUPGYSAT-5sO7wrpjMk14lnhyV-mmzgVr4ziFaOOiZF_VQWbYtf1p3lHs_I2Ot0mkF3C0LsZhh5hmlZA";
const API_URL = "https://api.data.gouv.fr/api/records/1.0/search/?";

export const showValue = () => {
  const params = new URLSearchParams({
    dataset: "prix-de-l-immobilier",
    rows: 10,
    sort: "price",
    "fields[0]": "address",
    "refine[address]": "32 rue de Libourne, Bordeaux",
    "refine[square_meter_price]": "90",
  });

  const headers = new Headers({
    "X-API-KEY": API_KEY,
  });

  fetch(`${API_URL}${params.toString()}`, { headers })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // manipuler les données pour l'affichage
    })
    .catch((error) => {
      console.error(error);
    });
};
