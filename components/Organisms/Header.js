import Image from 'next/image';
import React from 'react';
import ButtonWithLogoAndText from '../Atoms/buttons/ButtonWithLogoAndText';

const Header = () => {
    return (
        <div className='w-screen bg-white h-28 drop-shadow-md flex items-center place-content-between px-5 md:px-40'>
            {/* Left container */}
            <div className="cursor-pointer h-7 relative flex items-center w-40 md:w-56">
                <Image priority src="/Portailimmologo.png" layout='fill' objectFit='contain' objectPosition='left'  />
            </div>
            {/* Right container */}
            <div className="hidden lg:flex">
                {/* Button one */}
                <ButtonWithLogoAndText image="/VectorLight.png" text="Recommandations" size="big" after="withAfter"/>
                {/* Button two */}
                <ButtonWithLogoAndText image="/VectorLove.png" text="Favoris" size="normal" after="withAfter" />
                {/* Button three */}
                <button className='group/button w-32 relative flex items-center flex-col '>
                    <div className="w-9 relative h-full group-hover/button:scale-105  transition-transform">
                        <Image src="/Vectoruser.png" layout='fill' objectFit='contain'  />
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Header; 