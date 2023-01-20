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

export const updateASurface = (number) => {
  return {
    type: "updateASurface",
    payload: number,
  };
};

export const updateParts = (number) => {
  return {
    type: "updateParts",
    payload: number,
  };
};

export const updateRooms = (number) => {
  return {
    type: "updateRooms",
    payload: number,
  };
};

export const updateYears = (year) => {
  return {
    type: "updateYears",
    payload: year,
  };
};
export const updateWorks = (bool) => {
  return {
    type: "updateWorks",
    payload: bool,
  };
};

export const updateLivingArea = (value) => {
  return {
    type: "updateLivingArea",
    payload: value,
  };
};

export const updateLandArea = (value) => {
  return {
    type: "updateLandArea",
    payload: value,
  };
};
