import React from 'react';

const TitlePrimary = (props) => {
    const text = props.text;
    const textWithColor = props.textWithColor
    const color = props.color

    const classDesign = {
        white:"text-white text-2xl md:text-4xl font-bold md:w-10/12",
        purple:"text-purple text-2xl md:text-4xl font-bold md:w-10/12"
    }

    return (
        <>
            {
                textWithColor !== undefined && textWithColor !== null ? 
                <h1 className={color !== undefined ? classDesign[color] : classDesign.white}>{text}&nbsp;<span className='text-blue'>{textWithColor}</span></h1>:
                <h1 className={color !== undefined ? classDesign[color] : classDesign.white}>{text}</h1>
            }
        </>
    );
};

export default TitlePrimary;