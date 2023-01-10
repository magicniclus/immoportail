const initState = {
    addressIsValid: false,
    address: ""
}

const reducer = ((state= initState, action)=>{
    switch(action.type) {
        case "updateAddressIsValid":
            return{
                ...state,
                adressIsValid: action.payload
            }

        case "updateAddress":
            return{
                ...state,
                address: action.payload
            }    
            
        default: return state    
    }
})

export default reducer