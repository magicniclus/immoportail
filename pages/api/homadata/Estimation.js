import { mockedData } from "./MockedData";

const mocked = true;

export const getEstimation = (object) => {
  return new Promise((resolve, reject) => {
    if (mocked) {
      mockedData()
        .then((value) => resolve(value))
        .catch((err) => {
          reject(err);
        });
    }
  });
};
