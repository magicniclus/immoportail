import React from 'react';

const SeparationLign = (props) => {
    const color = props.color

    const classDesign = {
        blue:"w-20 h-2 bg-blue rounded-full",
        white:"w-20 h-2 bg-white rounded-full",
        yellow:"w-20 h-2 bg-yellow rounded-full",
        purple:"w-20 h-2 bg-purple rounded-full"
    }

    return (
        <div className={color !== undefined ? classDesign[color] : classDesign.blue}>
        </div>
    );
};

export default SeparationLign;