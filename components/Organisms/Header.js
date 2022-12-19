import Image from 'next/image';
import React from 'react';

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
                <button className='group/button w-48 relative flex items-center flex-col after:content-[""] after:absolute after:right-0 after:bottom-0 after:w-px after:h-full after:bg-purple '>
                    <div className="w-7 relative h-8  group-hover/button:scale-105  transition-transform">
                        <Image src="/VectorLight.png" layout='fill' objectFit='contain'  />
                    </div>
                    <p className="mx-3 text-purple">Recommandations</p>
                </button>
                {/* Button two */}
                <button className='group/button w-36 relative flex items-center flex-col after:content-[""] after:absolute after:right-0 after:bottom-0 after:w-px after:h-full after:bg-purple '>
                    <div className="w-7 relative h-8  group-hover/button:scale-105  transition-transform">
                        <Image src="/VectorLove.png" layout='fill' objectFit='contain'  />
                    </div>
                    <p className="mx-3 text-purple">Favoris</p>
                </button>
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