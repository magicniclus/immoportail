import React from 'react';
import Icon from '../Atoms/logos/Icon';

const SetOfQuality = (props) => {
    const image = props.image
    return (
        <div>
            <Icon image={image} />
        </div>
    );
};

export default SetOfQuality;