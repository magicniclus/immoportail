import React from 'react';

const Text = (props) => {
    const textSize = props.textSize
    const color = props.color
    const marginY = props.marginY
    const marginX = props.marginX

    const classDesign = {
        light:{
            white:"text-white text-xs md:text-sm font-thin w-4/6 md:w-3/6 " + marginY + " " + marginX,
            purple:"text-purple text-xs md:text-sm font-thin w-4/6 md:w-3/6 " + marginY + " " + marginX
        },
        normal: {
            white:"text-white text-sm md:text-base font-thin" + marginY + " " + marginX,
            purple:"text-purple text-sm md:text-base font-thin " + marginY + " " + marginX
        },
        big: {
            white:"text-white text-xl md:text-base" + marginY + " " + marginX,
            purple:"text-purple text-xl md:text-base" + marginY + " " + marginX
        }
    }

    return (
        <p className={textSize !== undefined && color !== undefined ? classDesign[textSize][color]: classDesign.normal.white}>
           {props.children} 
        </p>
    );
};

export default Text;