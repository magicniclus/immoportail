import React from 'react';
import TitleSecondary from "../Atoms/titles/TitleSecondary"
import InputWithLogo from '../Atoms/inputs/InputWithLogo';
import ButtonPrimary from '../Atoms/buttons/ButtonPrimary';

const SetInputWithTitleAndButton = () => {
    return (
        <div className='bg-white py-5 px-7 my-4 rounded-lg md:w-10/12'>
            <TitleSecondary text="Adresse du bien à estimer" color="purple" />
            <InputWithLogo image="/Vectorlocalization.png" marginY="my-4" placeholder="Saisir une adresse" />
            <ButtonPrimary text="Estimer" version="primary" />
        </div>
    );
};

export default SetInputWithTitleAndButton;