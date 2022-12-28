import Image from 'next/image';
import React from 'react';

const Icon = (props) => {
    const image = props.image
    const size = props.size

    const classDesign = {
        extraLight:{
            container:"w-4 md:w-4 h-4 md:h-4",
            image:20
        },
        light:{
            container:"w-10 md:w-10 h-10 md:h-10",
            image: 25
        },
        normal:{
            container:"w-16 md:w-24 h-16 md:h-24",
            image: 80
        }
    }

    return (
        <div className={size === undefined ? classDesign.normal.container : classDesign[size].container}>
            <Image priority src={"/vector/"+image+".png"} height={size === undefined ? classDesign.normal.image : classDesign[size].image} width={size === undefined ? classDesign.normal.image : classDesign[size].image} alt="Icon" />
        </div>
    );
};

export default Icon;