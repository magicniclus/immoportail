const initState = {
  loader: false,
  formAddressStatus: false,
  isReady: false,
  cookieDisplay: false,
  modal: {
    message: null,
    show: false,
  },
  userInformations: {
    firstName: null,
    lastName: null,
    phone: null,
    mail: null,
  },
  id: null,
  address: "",
  addressCoordinate: null,
  stepOfProjectProgress: 1,
  stepNumber: null,
  estimationElements: {
    accommodation: null,
    years: null,
    surface: null,
    level: null,
    energy: null,
    buildingLevel: null,
    elevator: null,
    partNumber: null,
    roomNumber: null,
    works: null,
    livingArea: null,
    landArea: null,
    cave: null,
    dependence: null,
    piscine: null,
    parking: null,
    box: null,
    balcon: null,
    exposure: null,
    view: null,
    standing: null,
    secteur: null,
    adjoining: null,
    contract: null,
    when: null,
  },
  resultatEstimation: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "handleLoader":
      return {
        ...state,
        loader: action.payload,
      };

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

    case "updateYears":
      return {
        ...state,
        estimationElements: {
          ...state.estimationElements,
          years: action.payload,
        },
      };

    case "updateWorks":
      return {
        ...state,
        estimationElements: {
          ...state.estimationElements,
          works: action.payload,
        },
      };

    case "updateLivingArea":
      return {
        ...state,
        estimationElements: {
          ...state.estimationElements,
          livingArea: action.payload,
        },
      };

    case "updateLandArea":
      return {
        ...state,
        estimationElements: {
          ...state.estimationElements,
          landArea: action.payload,
        },
      };

    case "updateCave":
      return {
        ...state,
        estimationElements: {
          ...state.estimationElements,
          cave: action.payload,
        },
      };

    case "updateDependence":
      return {
        ...state,
        estimationElements: {
          ...state.estimationElements,
          dependence: action.payload,
        },
      };

    case "updatePiscine":
      return {
        ...state,
        estimationElements: {
          ...state.estimationElements,
          Piscine: action.payload,
        },
      };

    case "updateParking":
      return {
        ...state,
        estimationElements: {
          ...state.estimationElements,
          parking: action.payload,
        },
      };

    case "updateBox":
      return {
        ...state,
        estimationElements: {
          ...state.estimationElements,
          box: action.payload,
        },
      };

    case "updateBalcon":
      return {
        ...state,
        estimationElements: {
          ...state.estimationElements,
          balcon: action.payload,
        },
      };

    case "updateOutdoorSpace":
      return {
        ...state,
        estimationElements: {
          ...state.estimationElements,
          cave: action.payload.cave,
          dependence: action.payload.dependence,
          piscine: action.payload.piscine,
          parking: action.payload.parking,
          box: action.payload.box,
          balcon: action.payload.balcon,
        },
      };

    case "updateExposure":
      return {
        ...state,
        estimationElements: {
          ...state.estimationElements,
          exposure: action.payload.exposure,
          view: action.payload.view,
        },
      };

    case "updateStanding":
      return {
        ...state,
        estimationElements: {
          ...state.estimationElements,
          standing: action.payload.standing,
          secteur: action.payload.secteur,
        },
      };

    case "updateAdjoining":
      return {
        ...state,
        estimationElements: {
          ...state.estimationElements,
          adjoining: action.payload,
        },
      };

    case "updateProfil":
      return {
        ...state,
        estimationElements: {
          ...state.estimationElements,
          contract: action.payload.contract,
          when: action.payload.when,
        },
      };

    case "updateLevel":
      return {
        ...state,
        estimationElements: {
          ...state.estimationElements,
          level: action.payload,
        },
      };

    case "updateBuildingLevel":
      return {
        ...state,
        estimationElements: {
          ...state.estimationElements,
          buildingLevel: action.payload,
        },
      };

    case "updateElevator":
      return {
        ...state,
        estimationElements: {
          ...state.estimationElements,
          elevator: action.payload,
        },
      };

    case "updateEnergy":
      return {
        ...state,
        estimationElements: {
          ...state.estimationElements,
          energy: action.payload,
        },
      };

    case "updateUserInformations":
      return {
        ...state,
        userInformations: {
          ...state.userInformations,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          phone: action.payload.phone,
          mail: action.payload.mail,
        },
      };

    case "makeResultatEstimation":
      return {
        ...state,
        resultatEstimation: action.payload,
      };

    case "updateId":
      return {
        ...state,
        id: action.payload,
      };

    case "updateModal":
      return {
        ...state,
        modal: {
          ...state.modal,
          message: action.payload.message,
          show: action.payload.show,
        },
      };

    case "updateFormAddressStatus":
      return {
        ...state,
        formAddressStatus: action.payload,
      };

    case "updateIsReady":
      return {
        ...state,
        isReady: action.payload,
      };

    case "updateCookieDisplay":
      return {
        ...state,
        cookieDisplay: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
