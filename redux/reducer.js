const initState = {
    address: "",
    addressCoordinate: null
}

const reducer = ((state= initState, action)=>{
    switch(action.type) {
        case "updateAddress":
            return{
                ...state,
                address: action.payload
            }

        case "updateAddressCoordinate":
            return{
                ...state,
                addressCoordinate: action.payload
            }

        default: return state
    }
})

export default reducer