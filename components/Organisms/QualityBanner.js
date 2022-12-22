import React from 'react';
import SetOfQuality from '../Molecules/SetOfQuality';

const QualityBanner = () => {
    return (
        <div className='w-full'>
            <div className="flex-col lg:flex-row flex justify-between py-10 md:py-16 items-center px-5 md:px-40">
                <SetOfQuality image="Vectorcheck" title="Estimation" titleWithColor="en ligne" text="Estimez votre bien en quelques clic grâce à notre outil d’estimation 100% gratuit, fiable, basé sur les données officiel mis à jour en temps réel." />
                <SetOfQuality image="Vectorcheck" title="Estimation" titleWithColor="en ligne" text="Estimez votre bien en quelques clic grâce à notre outil d’estimation 100% gratuit, fiable, basé sur les données officiel mis à jour en temps réel." />
                <SetOfQuality image="Vectorcheck" title="Estimation" titleWithColor="en ligne" text="Estimez votre bien en quelques clic grâce à notre outil d’estimation 100% gratuit, fiable, basé sur les données officiel mis à jour en temps réel." />
            </div>
        </div>
    );
};

export default QualityBanner;