import React from 'react';

const SeparationLign = (props) => {
    const color = props.color
    const marginY = props.marginY

    const classDesign = {
        blue:"w-20 h-2 bg-blue rounded-full"+" "+marginY,
        white:"w-20 h-2 bg-white rounded-full"+" "+marginY,
        yellow:"w-20 h-2 bg-yellow rounded-full"+" "+marginY,
        purple:"w-20 h-2 bg-purple rounded-full"+" "+marginY
    }

    return (
        <div className={color !== undefined ? classDesign[color] : classDesign.blue}>
        </div>
    );
};

export default SeparationLign;