import Image from 'next/image';
import React from 'react';
import SetOfMenuButtons from '../Molecules/SetOfMenuButtons';

const Header = () => {
    return (
        <div className='w-screen bg-white h-28 drop-shadow-md flex items-center place-content-between px-5 md:px-40'>
            {/* Left container */}
            <div className="cursor-pointer h-7 relative flex items-center w-40 md:w-56">
                <Image priority src="/Portailimmologo.png" layout='fill' objectFit='contain' objectPosition='left'  />
            </div>
            {/* Right container */}
            <SetOfMenuButtons />
        </div>
    );
};

export default Header; 