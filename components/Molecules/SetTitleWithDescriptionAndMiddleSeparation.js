import React from 'react';
import SeparationLign from '../Atoms/others/SeparationLign';
import TitlePrimary from "../Atoms/titles/TitlePrimary"

const SetTitleWithDescriptionAndMiddleSeparation = (props) => {
    const title = props.title
    const titleWithColor = props.titleWithColor
    const colorTitle = props.colorTitle
    const colorSeparation = props.colorSeparation
    return (
        <div>
            <TitlePrimary text={title} textWithColor={titleWithColor} color={colorTitle} />
            <SeparationLign color={colorSeparation}/>
        </div>
    );
};

export default SetTitleWithDescriptionAndMiddleSeparation;