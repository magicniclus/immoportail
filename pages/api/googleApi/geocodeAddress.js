geoCodeAdress = (adress)=>{
    const geocoder = new google.maps.Geocoder();
    return new Promise((resolve, reject) => {
    // Appeler la méthode geocode de l'objet Geocoder en lui passant l'adresse et une fonction de callback
        geocoder.geocode({ address }, (results, status) => {
        if (status === 'OK') {
            // Si le géocodage a réussi, retourner les coordonnées géographiques
            resolve(results[0].geometry.location);
        } else {
            // Si le géocodage a échoué, retourner une erreur
            reject(new Error(`Le géocodage a échoué pour la raison suivante : ${status}`));
        }
        });
  });
}

export default geoCodeAdress