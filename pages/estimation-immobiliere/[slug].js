import React, { useEffect } from 'react';

const Simulateur = ({params}) => {
    useEffect(()=>{
        console.log(params);
    }, [])
    return (
        <div>
            <h1>Simulateur</h1>
        </div>
    );
};

export default Simulateur;