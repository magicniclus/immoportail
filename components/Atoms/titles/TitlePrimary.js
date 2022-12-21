import React from 'react';

const TitlePrimary = (props) => {
    const text = props.text;
    const textWithColor = props.textWithColor
    return (
        <>
            {
                textWithColor !== undefined && textWithColor !== null ? 
                <h1 className='text-white text-2xl md:text-4xl font-bold md:w-3/5'>{text}&nbsp;<span className='text-blue'>{textWithColor}</span></h1>:
                <h1 className='text-white text-2xl md:text-4xl font-bold md:w-3/5'>{text}</h1>
            }
        </>
    );
};

export default TitlePrimary;