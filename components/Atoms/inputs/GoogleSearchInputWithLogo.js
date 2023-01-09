import React, { useEffect, useState } from 'react';

const GoogleSearchInputWithLogo = () => {

    const mapApiJs = "https://maps.googleapis.com/maps/api/js"
    const apiKey = process.env.VITE_APP_GMAP_API_KEY

    useEffect(()=>{
        console.log(process.env.VITE_APP_GMAP_API_KEY);
    }, [])

    return (
        <div className='w-screen px-5 md:px-40'>
            <div className='w-24 h-14 flex'>
                <span></span>
                <input type="text" placeholder='Search content'/>
                <button>X</button>
            </div>
            <div className="">
                <p className='text-purple'>City: <span>...</span></p>
                <p className='text-purple'>State: <span>...</span></p>
                <p className='text-purple'>Zip: <span>...</span></p>
                <p className='text-purple'>Country: <span>...</span></p>
            </div>
        </div>
    );
};

export default GoogleSearchInputWithLogo;