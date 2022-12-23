import Image from 'next/image';
import React from 'react';

const Mozaic = () => {
    return (
        <div style={{background: "radial-gradient(circle, rgba(54,38,118,0.16992734593837533) 0%, rgba(255,255,255,0) 20%)"}} className='h-5/6 min-w-full flex flex-col '>
            <div className="h-3/6 min-w-full flex justify-between">
                <div className="h-full w-6/12 flex flex-col justify-between">
                    <div className="h-2/6 w-full relative rounded-2xl overflow-hidden">
                        <Image priority src="/houses/one.jpg" layout='fill' objectFit='cover' />
                    </div>
                    <div className="h-2/6 w-full relative rounded-2xl overflow-hidden">
                        <Image priority src="/houses/two.jpg" layout='fill' objectFit='cover' />
                    </div>
                </div>
                <div className="h-full w-5/12">
                    <div className="h-5/6 w-full relative rounded-2xl overflow-hidden">
                        <Image priority src="/houses/three.jpg" layout='fill' objectFit='cover' />
                    </div>
                </div>
            </div>
            <div className="h-3/6 min-w-full mt-10 flex flex-col justify-between">
                <div className="h-3/6 w-full relative rounded-2xl overflow-hidden">
                    <Image priority src="/houses/four.jpg" layout='fill' objectFit='cover' />
                </div>
                <div className="w-6/6 h-2/6 flex justify-end items-end">
                    <div className="w-3/6 h-full relative rounded-2xl overflow-hidden">
                        <Image priority src="/houses/five.jpg" layout='fill' objectFit='cover' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mozaic;