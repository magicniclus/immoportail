import React from 'react';
import LayoutEstimation from '../../components/Layout/LayoutEstimation';
import BottomStepContainer from '../../components/Organisms/BottomStepContainer';
import MultitCardsContainer from '../../components/Organisms/MultitCardsContainer';
import ProjectStepContainer from '../../components/Organisms/ProjectStepContainer';

const EstimationImmobiliere = () => {
    return (
        <LayoutEstimation>
            <div className="min-h-[calc((100vh-7rem))] w-full flex mx-auto flex-col justify-end md:flex-row md:max-w-screen-2xl md:px-5 md:py-8">
                {/* Left Container */}
                <ProjectStepContainer />
                {/* Right Container */}
                <MultitCardsContainer />
                {/* Bottom Container */}
                <BottomStepContainer />
            </div>
        </LayoutEstimation>
    );
};

export default EstimationImmobiliere;