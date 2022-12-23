import React from 'react';
import TitleSecondary from "../Atoms/titles/TitleSecondary"
import InputWithLogo from '../Atoms/inputs/InputWithLogo';
import ButtonPrimary from '../Atoms/buttons/ButtonPrimary';

const SetInputWithTitleAndButton = (props) => {
    const bgColor = props.bgColor
    const titleColor = props.titleColor
    const buttonVersion = props.buttonVersion
    const colorInput = props.colorInput

    return (
        <div className={bgColor !== undefined ?'bg-'+ bgColor + ' py-5 px-7 my-4 rounded-lg md:w-10/12' : 'bg-white py-5 px-7 my-4 rounded-lg md:w-10/12'}>
            <TitleSecondary text="Adresse du bien à estimer" color={titleColor !== undefined ? titleColor :"purple"} />
            <InputWithLogo image={titleColor === "purple" ? "/Vectorlocalization.png" : "/vector/VectorlocalizationPurple.png"} marginY="my-4" placeholder="Saisir une adresse" color={colorInput !== undefined ? colorInput : "purple"} />
            <ButtonPrimary text="Estimer" version={buttonVersion !== undefined ? buttonVersion :"primary"} />
        </div>
    );
};

export default SetInputWithTitleAndButton;