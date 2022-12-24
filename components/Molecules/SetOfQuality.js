import React from 'react';
import Icon from '../Atoms/logos/Icon';
import Text from '../Atoms/texts/Text';
import TitleTertiary from '../Atoms/titles/TitleTertiary';

const SetOfQuality = (props) => {
    const image = props.image
    const title = props.title
    const titleWithColor = props.titleWithColor
    const text = props.text
    return (
        <div className='flex flex-col items-center max-w-xs my-14 lg:my-0'>
            <Icon image={image} />
            <TitleTertiary text={title} textWithColor={titleWithColor} color="purple" marginY="my-5" />
            <Text color="purple" textSize="bigLight" center="text-center">
                {text}
            </Text>
        </div>
    );
};

export default SetOfQuality;