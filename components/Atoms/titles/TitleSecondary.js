import React from 'react';

const TitleSecondary = (props) => {
    const title = props.title;
    const titleWithColor = props.titleWithColor
    const color = props.color;

    const classDesign = {
        primary: "text-white text-base md:text-2xl",
        secondary: "text-purple text-base md:text-2xl"
    }

    return (
        <>
            {
                titleWithColor !== undefined && titleWithColor !== null ? 
                <h2 className={color !== undefined && color !== null ?  classDesign[color] : classDesign.primary}>{title}&nbsp;<span className='text-blue'>{titleWithColor}</span></h2>:
                <h2 className={color !== undefined && color !== null ?  classDesign[color] : classDesign.primary}>{title}</h2>
            }
        </>
    );
};

export default TitleSecondary;