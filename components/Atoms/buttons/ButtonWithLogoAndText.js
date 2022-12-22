import React from 'react';
import Image from 'next/image';

const ButtonWithLogoAndText = (props) => {
    const text = props.text
    const image = props.image
    const after = props.after
    const size = props.size

    const classDesign = {
        small:{
            withAfter: 'group/button w-32 relative flex items-center flex-col after:content-[""] after:absolute after:right-0 after:bottom-0 after:w-px after:h-full after:bg-purple',
            withoutAfter:'group/button w-32 relative flex items-center flex-col'
        },
        normal:{
            withAfter: 'group/button w-36 relative flex items-center flex-col after:content-[""] after:absolute after:right-0 after:bottom-0 after:w-px after:h-full after:bg-purple',
            withoutAfter:'group/button w-36 relative flex items-center flex-col'
        },
        big:{
            withAfter: 'group/button w-48 relative flex items-center flex-col after:content-[""] after:absolute after:right-0 after:bottom-0 after:w-px after:h-full after:bg-purple',
            withoutAfter:'group/button w-48 relative flex items-center flex-col'
        }
    }

    return (
        <button className={size===undefined ? classDesign.normal.withAfter : classDesign[size][after]}>
            <div className="w-7 relative h-8  group-hover/button:scale-105  transition-transform">
                <Image src={image === undefined ? "/VectorLight.png" : image} layout='fill' objectFit='contain' alt="icon" />
            </div>
            <p className="mx-3 text-purple">{text === undefined ? "Recommandations" : text}</p>
        </button>
    );
};

export default ButtonWithLogoAndText;