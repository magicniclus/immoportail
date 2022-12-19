import Image from 'next/image';
import React from 'react';

const InputWhithLogo = (props) => {
    const placeholder = props.placeholder
    const logoType = props.logoType

    return (
        <div className='relative w-80 md:w-10/12 h-12'>
            <input className='border rounded-lg border-purple placeholder-gray-200::placeholder px-3 w-full h-12' type="text" placeholder={placeholder}  />
            <div className='absolute right-0 top-1/2 transform -translate-y-1/2 h-12 w-14 bg-purple flex content-center items-center rounded-r-lg'>
                <div className='mx-auto'>
                    <Image src={logoType} height={15} width={15} property objectFit="contain" objectPosition='right'/>
                </div>
            </div>
        </div>
    );
};

export default InputWhithLogo;