import React from 'react';

const TitlePrimary = (props) => {
    const title = props.title;
    const titleWithColor = props.titleWithColor
    return (
        <>
            {
                titleWithColor !== undefined && titleWithColor !== null ? 
                <h1 className='text-white text-2xl md:text-4xl font-bold'>{title}&nbsp;<span className='text-blue'>{titleWithColor}</span></h1>:
                <h1 className='text-white text-2xl md:text-4xl font-bold'>{title}</h1>
            }
        </>
    );
};

export default TitlePrimary;