import React from 'react';
import Text from '../Atoms/texts/Text';
import TitlePrimary from '../Atoms/titles/TitlePrimary';
import SeparationLign from '../Atoms/others/SeparationLign';
import TitleSecondary from '../Atoms/titles/TitleSecondary';
import SetOfAdvice from './SetOfAdvice';

const SetOfImmoStep = (props) => {
    const textForAdvice = props.textForAdvice
    const colorForAdvice = props.colorForAdvice

    return (
        <div>
            <TitlePrimary text="Quel sont les étapes " textWithColor="d’un projet immobilier ?" color="purple" />
            <SeparationLign color="yellow" marginY="my-4"/>
            <div className="">
                <div className="my-10">
                    <TitleSecondary marginY="mb-3" text="1. Estimer correctement votre bien" color="purple" />
                    <Text textSize="light" color="purple">
                        L’étape la plus importante, et afin d’affiner votre projet, n’hésitez pas à prendre rendez-vous avec un de nos conseiller qui vous apportera toutes les clés à la réussite de votre projet.
                    </Text>
                </div>
                <div className="my-10">
                    <TitleSecondary marginY="mb-3" text="2. Mettre en vente son bien" color="purple" />
                    <Text textSize="light" color="purple">
                        Il faut mettre en ventre son bien au bon prix, pour cela il existe un multitude de plateforme, mais également le réseau interne d’un professionnel. 
                    </Text>
                </div>
                <SetOfAdvice size="long" title="Notre conseil" text="La diffusion d’un annonce peu couter très cher à un particulier si il veut que son annonce remonte en haut des listes de diffusion. C’est une des raisons pour cela qu’il est important de passer pas un professionnel qui as des partenariats avec la plupart d’entre elles. "/>
                <div className="my-10">
                    <TitleSecondary marginY="mb-3" text="3. Trouver le bon acheteur" color="purple" />
                    <Text textSize="light" color="purple">
                        La aussi il n’est pas nécessaire de réaliser énormément de visite ou d’accepter la première proposition venu. Il suffit d’un acquéreur ! Faite confiance à votre agent pour réaliser les différentes visite et filtrer les potentiel réel acquéreurs afin d’éviter un perte de temps inutile.   
                    </Text>
                </div>
                <div className="my-10">
                    <TitleSecondary marginY="mb-3" text="4. Passage à l’acte notarial " color="purple" />
                    <Text textSize="light" color="purple">
                        La aussi il n’est pas nécessaire de réaliser énormément de visite ou d’accepter la première proposition venu. Il suffit d’un acquéreur ! Faite confiance à votre agent pour réaliser les différentes visite et filtrer les potentiel réel acquéreurs afin d’éviter un perte de temps inutile.   
                    </Text>
                </div>
            </div>
        </div>
    );
};

export default SetOfImmoStep;