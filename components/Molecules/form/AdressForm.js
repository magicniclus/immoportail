import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AdressForm = (props) => {
    const placeholder = props.placeholder
    const color = props.color

    const API_KEY = 'AIzaSyBhFIY1nvseuxoi4xA0HPiM-PvwNQdx9kI'
    // Déclarez un état local pour stocker l'adresse saisie par l'utilisateur
    const [address, setAddress] = useState('')
    // Déclarez un état local pour stocker les suggestions d'adresse
    const [suggestions, setSuggestions] = useState([])

    const [suggestionsAreOpen, setSuggestionsAreOpen]=useState(false)

    // Utilisez useEffect pour récupérer les suggestions d'adresse à mesure que l'utilisateur saisit l'adresse
    useEffect(() => {
        setSuggestionsAreOpen(false)
        if ( address.trim() === '') {
            setSuggestions([])
            return
        }

        axios.get(
            `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${address}&key=${API_KEY}&components=country:fr`
        )
        .then(res => {
            setSuggestions(res.data.predictions)
        })
        .catch(error => {
            console.error(error)
            setSuggestions("Erreur, veuillez essayer à nouveau")
        })
    }, [address])
    
    const handleAddress = (description) => {
        setAddress(description)
        setSuggestions([])
    }
    
    useEffect(()=>{
        if(suggestions.length > 0) setSuggestionsAreOpen(true)
        else setSuggestionsAreOpen(false)
    }, [suggestions])

    return (
        <div>
            {/* Utilisez un champ de saisie pour saisir l'adresse */}
            <input
                type="text"
                value={address}
                onChange={e => setAddress(e.target.value)}
                className={color !== undefined ? 'border text-purple rounded-lg placeholder-gray-200::placeholder px-3 w-full h-12 border-'+color :'border text-purple rounded-lg placeholder-gray-200::placeholder px-3 w-full h-12 border-purple'} 
                placeholder={placeholder !== undefined ? placeholder : null}
            />
            {/* Affichez les suggestions d'adresse dans une liste */}
            {
                suggestionsAreOpen ?
                <ul className={'bg-white py-1'}>
                    {Array.isArray(suggestions) && suggestions.map(suggestion => (
                        <li onClick={()=>handleAddress(suggestion.description)}className="text-purple cursor-pointer mx-3 my-3" key={suggestion.id}>{suggestion.description}</li>
                    ))}
                </ul>:
                null
            }
        </div>
    )
}

export default AdressForm;