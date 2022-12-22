import React from 'react';
import SetTitleWithDescriptionAndMiddleSeparation from '../Molecules/SetTitleWithDescriptionAndMiddleSeparation';

const EvaluationBanner = () => {
    return (
        <div className='w-full px-5 md:px-40 '>
            <SetTitleWithDescriptionAndMiddleSeparation title="Comment évaluer" titleWithColor="gratuitement son bien immobilier ?" colorTitle="purple" colorSeparation="yellow" />
        </div>
    );
};

export default EvaluationBanner;