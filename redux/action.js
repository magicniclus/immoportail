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

export const updateStepNumber = (number) => {
  return {
    type: "updateStepNumber",
    payload: number,
  };
};

export const updateAccommodationType = (type) => {
  return {
    type: "updateAccommodationType",
    payload: type,
  };
};

export const updateASurface = (type) => {
  return {
    type: "updateASurface",
    payload: type,
  };
};

export const updateParts = (type) => {
  return {
    type: "updateParts",
    payload: type,
  };
};

export const updateRooms = (type) => {
  return {
    type: "updateRooms",
    payload: type,
  };
};
