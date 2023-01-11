import Link from 'next/link';
import React from 'react';
import Logo from '../../Atoms/logos/Logo';
import TitleSecondary from '../../Atoms/titles/TitleSecondary';

const HeaderEstimation = () => {
    return (
        <div className='w-screen z-20 bg-white h-28 drop-shadow-md flex items-center place-content-between px-5 lg:px-40'>
            <div className="flex flex-col items-baseline lg:flex-row">
                {/* Left container */}
                <Link href="/">
                    <Logo />
                </Link>
                {/* Right container */}
                <div className="ml-5">
                    <TitleSecondary text="Votre estimation en ligne en " textWithColor="2 minutes" color="purple"/>
                </div>
            </div>
        </div>
    );
};

export default HeaderEstimation;