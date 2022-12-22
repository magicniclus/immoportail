import Image from 'next/image';
import React from 'react';

const Icon = (props) => {
    const image = props.image

    return (
        <div className='w-16 md:w-24 h-16 md:h-24'>
            <Image priority src={"/vector/"+image+".png"} height={80} width={80} alt="Icon" />
        </div>
    );
};

export default Icon;