import React from 'react';
import SetOfImmoStep from '../Molecules/SetOfImmoStep';

const ImmoStepContainer = () => {
    return (
        <div className='w-full px-5 md:px-40 lg:flex lg:justify-between'>
            <div className="lg:w-8/12 w-full">
                <SetOfImmoStep />
            </div>
            <div className="w-6/12 bg-blue min-h-full lg:flex hidden">

            </div>
        </div>
    );
};

export default ImmoStepContainer;