export const updateAddressIsValid = (bool) => {
  return {
    type: "updateAddressIsValid",
    payload: bool,
  };
};

export const updateAddress = (address) => {
  return {
    type: "updateAddress",
    payload: address,
  };
};

export const updateAddressCoordinate = (coordinate) => {
  return {
    type: "updateAddressCoordinate",
    payload: coordinate,
  };
};

export const updateStepOfProjectProgress = (stepValue) => {
  return {
    type: "stepOfProjectProgress",
    payload: stepValue,
  };
};
