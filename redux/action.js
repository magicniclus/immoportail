export const updateAddressIsValid = (bool)=>{
    return {
        type: "updateAddressIsValid",
        payload: bool
    }
}

export const updateAddress = (address)=>{
    return {
        type: "updateAddress",
        payload: address
    }
}