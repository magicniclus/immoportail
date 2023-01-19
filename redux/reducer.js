const initState = {
  address: "",
  addressCoordinate: null,
  stepOfProjectProgress: 1,
  stepNumber: null,
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

    default:
      return state;
  }
};

export default reducer;
