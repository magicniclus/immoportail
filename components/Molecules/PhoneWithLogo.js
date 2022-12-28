import React from 'react';
import Icon from "../Atoms/logos/Icon"
import TitleSecondary from '../Atoms/titles/TitleSecondary';

const PhoneWithLogo = (props) => {
    const phoneNumber = props.phoneNumber
    return (
        <a href={'tel:'+phoneNumber} className="flex items-center cursor-pointer">
            <Icon image="Vectorphone" size="extraLight"/>
            <TitleSecondary text={phoneNumber}  color="purple" marginY="mx-2" />
        </a> 
    );
};

export default PhoneWithLogo;