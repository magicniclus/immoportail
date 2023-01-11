import React from 'react';
import LayoutEstimation from '../../components/Layout/LayoutEstimation';

const EstimationImmobiliere = () => {
    return (
        <LayoutEstimation>
            <div className="min-h-full w-full lg:max-w-screen-2xl bg-grayLight flex justify-end mx-auto">
                {/* Left Container */}
                 <div className="w-5/12  bg-purple mx-auto">

                 </div>
                {/* Right Container */}
                <div className="w-7/12 bg-blue "></div>
            </div>
        </LayoutEstimation>
    );
};

export default EstimationImmobiliere;