const initState = {
  address: "",
  addressCoordinate: null,
  stepOfProjectProgress: 1,
  stepNumber: null,
  estimationElements: {
    accommodation: null,
    years: null,
    surface: null,
    partNumber: null,
    roomNumber: null,
  },
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "updateAddress":
      return {
        ...state,
        address: action.payload,
      };

    case "updateAddressCoordinate":
      return {
        ...state,
        addressCoordinate: action.payload,
      };

    case "stepOfProjectProgress":
      return {
        ...state,
        stepOfProjectProgress: action.payload,
      };

    case "updateStepNumber":
      return {
        ...state,
        stepNumber: action.payload,
      };

    case "updateAccommodationType":
      return {
        ...state,
        estimationElements: {
          ...state.estimationElements,
          accommodation: action.payload,
        },
      };

    case "updateASurface":
      return {
        ...state,
        estimationElements: {
          ...state.estimationElements,
          surface: action.payload,
        },
      };

    case "updateParts":
      return {
        ...state,
        estimationElements: {
          ...state.estimationElements,
          partNumber: action.payload,
        },
      };

    case "updateRooms":
      return {
        ...state,
        estimationElements: {
          ...state.estimationElements,
          roomNumber: action.payload,
        },
      };

    default:
      return state;
  }
};

export default reducer;
