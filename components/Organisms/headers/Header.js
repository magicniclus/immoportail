import React from 'react';
import Logo from '../../Atoms/logos/Logo';
import SetOfMenuButtons from '../../Molecules/SetOfMenuButtons';

const Header = () => {
    return (
        <div className='w-screen z-20 bg-white h-28 drop-shadow-md flex items-center place-content-between px-5 md:px-40'>
            {/* Left container */}
            <Logo />
            {/* Right container */}
            <SetOfMenuButtons />
        </div>
    );
};

export default Header; 