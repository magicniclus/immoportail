import React from 'react';
import SeparationLign from '../Atoms/others/SeparationLign';
import TitlePrimary from "../Atoms/titles/TitlePrimary"
import Text from "../Atoms/texts/Text"

const SetTitleWithDescriptionAndMiddleSeparation = (props) => {
    const title = props.title
    const titleWithColor = props.titleWithColor
    const colorTitle = props.colorTitle
    const colorSeparation = props.colorSeparation
    return (
        <div className=" lg:w-7/12">
            <TitlePrimary text={title} textWithColor={titleWithColor} color={colorTitle} />
            <SeparationLign color={colorSeparation} marginY="my-4"/>
            <Text textSize="normal" color="purple">
                La valeur d’un bien immobilier est estimé d’abord par son emplacement, en effet si le bien est situé dans une rue calme en dehors du centre ville, ou en campagne ou alors dans un lieu plus vivant avec plus de passage, le prix peut grandement varier. <br/><br/>

                C’est pour cela que nous conseillons à tout propriétaire aillant pour projet de vendre de prendre rendez-vous avec un conseiller spécialisé afin d’évaluer, d’affiner ou de conseiller afin de rentre le projet le plus précis possible. 
            </Text>
        </div>
    );
};

export default SetTitleWithDescriptionAndMiddleSeparation;