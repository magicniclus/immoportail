import { mockedData } from "./MockedData";

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
