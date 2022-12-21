import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Point from '../Atoms/others/Point';

const LightBox = (props) => {
    const [whatPointIsActive, setWhatPointIsActive] = useState(0)

    const autoScroll = ()=>{
        const interval = setInterval(()=>{
            if(whatPointIsActive >= 0)setWhatPointIsActive(whatPointIsActive=>whatPointIsActive+1) 
            if(whatPointIsActive >= 4) setWhatPointIsActive(0)
        }, 2000)
        return ()=>clearInterval(interval)
    }

    useEffect(()=>{
        const interval = setInterval(()=>{
            if(whatPointIsActive >= 0)setWhatPointIsActive(whatPointIsActive=>whatPointIsActive+1) 
            if(whatPointIsActive >= 4) setWhatPointIsActive(whatPointIsActive=> 0)
        }, 4000)
        return ()=>clearInterval(interval)
    }, [whatPointIsActive])

    return (
        <div className='flex content-center items-center relative w-full h-full'>
            <div className="w-full h-full">
                <Image src="/imageOne.png" layout='fill' objectFit='cover'/>
            </div>
            <div className="w-2/6 flex justify-around items-center absolute bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-2/2">
                <Point active={whatPointIsActive === 0 ? true : false}/>
                <Point active={whatPointIsActive === 1 ? true : false}/>
                <Point active={whatPointIsActive === 2 ? true : false}/>
                <Point active={whatPointIsActive === 3 ? true : false}/>
                <Point active={whatPointIsActive === 4 ? true : false}/>
            </div>
        </div>
    );
};

export default LightBox;