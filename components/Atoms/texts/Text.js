import React from 'react';

const Text = (props) => {
    const textSize = props.textSise
    const color = props.color
    const text = props.text

    const classDesign = {
        primary: {
            white:"",
            purple:""
        },
        secondary: {
            white:"",
            purple:""
        }
    }

    return (
        <p className={textSize !== undefined && color !== undefined ? classDesign[textSize][color]: classDesign.primary.white}>
           {text} 
        </p>
    );
};

export default Text;