import React from 'react';
import SeparationLign from '../Atoms/others/SeparationLign';
import Text from '../Atoms/texts/Text';
import SetInputWithTitleAndButton from '../Molecules/SetInputWithTitleAndButton';
import TitlePrimary from '../Atoms/titles/TitlePrimary';
import LightBox from '../Molecules/LightBox';

const EstimationBanner = () => {
    return (
        <div className='bg-purple px-5 md:px-40 py-10 md:py-16 flex content-between relative'>
            {/* Right container */}
            <div className=" lg:w-8/12">
                <TitlePrimary text="Estimez votre bien en ligne" textWithColor="gratuitement en 2 minutes " />
                <Text textSize="light" color="white" marginY="my-4">
                    Nos estimations sont réalisées grâce aux caractéristiques de 
                    votre bien immobilier et du marché local en temps réel
                </Text>
                <SeparationLign color="white" />
                <SetInputWithTitleAndButton />
            </div>
            {/* Left  container */}
            <div className="hidden h-full bg-white lg:flex lg:w-4/12 absolute right-0 top-0">
                <LightBox />
            </div>
        </div>
    );
};

export default EstimationBanner;