import React from 'react';
import TitleSecondary from '../Atoms/titles/TitleSecondary';
import GetAdressInMap from '../Molecules/GetAdressInMap';
import GetProjectProgress from '../Molecules/GetProjectProgress';

const ProjectStepContainer = () => {
    return (
        <div className="md:w-5/12  h-full mx-h-[850px] md:flex hidden bg-grayLight flex-col lg:pl-0 lg:items-center justify-between pl-5 py-10">
            <TitleSecondary text="Caractéristiques de " textWithColor="votre bien" color="purple"/>
            <GetProjectProgress />
            <GetAdressInMap />
        </div>
    );
};

export default ProjectStepContainer;