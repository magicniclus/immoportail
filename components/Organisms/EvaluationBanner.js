import React from 'react';
import SetOfAdvice from '../Molecules/SetOfAdvice';
import SetTitleWithDescriptionAndMiddleSeparation from '../Molecules/SetTitleWithDescriptionAndMiddleSeparation';

const EvaluationBanner = () => {
    return (
        <div className='w-full px-5 md:px-40 '>
            <SetTitleWithDescriptionAndMiddleSeparation title="Comment évaluer" titleWithColor="gratuitement son bien immobilier ?" colorTitle="purple" colorSeparation="yellow" />
            <SetOfAdvice title="Notre conseil:" text="La plupart des propriétaire ont tendances à sur-évaluer leur bien. C’est pourquoi nous vous recommandons de vous renseigner valeur du marché actuel, de son évolution et surtout de vous entourer de professionnel compétant pour votre estimation." />
        </div>
    );
};

export default EvaluationBanner;