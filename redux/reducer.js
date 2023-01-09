const initState = {
    addressIsValid: false,
    adress: ""
}

const reducer = ((state= initState, action)=>{
    switch(action.type) {
        case "updateAddressIsValid":
            return{
                ...state,
                adressIsValid: action.payload
            }

        case "updateAdress":
            return{
                ...state,
                adress: action.payload
            }    
            
        default: return state    
    }
})

export default reducer