import React from 'react';
import Text from '../Atoms/texts/Text'
import TitleWithLogo from '../Atoms/titles/TitleWithLogo';

const SetOfAdvice = (props) => {
    const title = props.title
    const text = props.text
    const size = props.size
    const classDesign = {
        normal: 'lg:w-4/12 min-h-full rounded-lg bg-purple py-5 lg:py-5 px-12 flex justify-around flex-col my-4 lg:my-0',
        long: 'lg:w-7/12 min-h-full rounded-lg bg-purple py-5 lg:py-5 px-12 flex justify-around flex-col my-4 lg:my-0'
    }

    return (
        <div className={size === undefined ? classDesign.normal : classDesign[size]}>
            <TitleWithLogo text={title} image="Vectorhand" color="white" marginX="mb-4" />
            <Text textSize="bigLight" color="white">
                {text}
            </Text>
        </div>
    );
};

export default SetOfAdvice;