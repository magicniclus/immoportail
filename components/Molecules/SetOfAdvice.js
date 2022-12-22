import React from 'react';
import Text from '../Atoms/texts/Text'

const SetOfAdvice = (props) => {
    const title = props.title
    const text = props.text
    const color = props.color

    return (
        <div className=''>
            <Text textSize="light" color="white">
                {text}
            </Text>
        </div>
    );
};

export default SetOfAdvice;