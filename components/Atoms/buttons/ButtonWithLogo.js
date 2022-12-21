import React from 'react';
import Image from 'next/image';

const ButtonWithLogo = (props) => {
    const image = props.image
    return (
        <button className='group/button w-32 relative flex items-center flex-col '>
            <div className="w-9 relative h-full group-hover/button:scale-105  transition-transform">
                <Image src={image} layout='fill' objectFit='contain'  />
            </div>
        </button>
    );
};

export default ButtonWithLogo;