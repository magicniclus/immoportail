import Image from 'next/image';
import React from 'react';

const Logo = () => {
    return (
        <div className="cursor-pointer h-7 relative flex items-center w-40 md:w-56">
            <Image priority src="/Portailimmologo.png" layout='fill' objectFit='contain' objectPosition='left' alt="logo ImmoPortail" />
        </div>
    );
};

export default Logo;