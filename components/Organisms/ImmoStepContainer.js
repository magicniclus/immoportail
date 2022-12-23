import React from 'react';
import Mozaic from '../Molecules/Mozaic';
import SetOfImmoStep from '../Molecules/SetOfImmoStep';

const ImmoStepContainer = () => {
    return (
        <div className='w-full px-5 md:px-40 lg:flex lg:justify-between'>
            <div className="lg:w-8/12 w-full">
                <SetOfImmoStep />
            </div>
            <div className="w-4/12 min-h-full lg:flex hidden flex-col justify-center">
                <Mozaic />
            </div>
        </div>
    );
};

export default ImmoStepContainer;