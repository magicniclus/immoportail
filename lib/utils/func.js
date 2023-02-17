export function removeDecimals(number) {
  return Math.trunc(number);
}

export function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

export function formatNumber(number) {
  const parts = number.toString().split(".");
  const integerPart = parts[0];
  if (integerPart.length <= 3) return number;
  let formattedIntegerPart = "";
  for (let i = integerPart.length - 1; i >= 0; i -= 3) {
    const start = Math.max(i - 2, 0);
    formattedIntegerPart =
      integerPart.substring(start, i + 1) + " " + formattedIntegerPart;
  }
  return formattedIntegerPart + (parts[1] ? "." + parts[1] : "");
}
export const createId = Date.now().toString();

export const updateDPE = (value) => {
  if (value === "A") return 7;
  if (value === "B") return 6;
  if (value === "C") return 5;
  if (value === "D") return 4;
  if (value === "E") return 3;
  if (value === "F") return 2;
  if (value === "G") return 1;
};

export const updateView = (value) => {
  if (value === "Exceptionnelle") return 1;
  if (value === "Dégagé") return 1;
  if (value === "Vis-à-vis") return 1;
};

export const updateStanding = (value) => {
  if (value === "Moyen") return 2;
  if (value === "Standard") return 3;
  if (value === "Exceptionnel") return 4;
};
