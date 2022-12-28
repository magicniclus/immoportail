import React, { useState } from 'react';
import Text from '../Atoms/texts/Text';
import PhoneWithLogo from '../Molecules/PhoneWithLogo';
import Icon from '../Atoms/logos/Icon';
import Image from 'next/image';


const ContactModal = () => {

    const [toggleModal, setToggleModal]=useState(false)

    const closeModal = ()=>{
        return (
            <>
                <Text textSize="normal" color="purple">
                    Contactez directement <b>Nicolas</b> votre conseiller local:
                </Text>
                <div className="flex mt-3 items-center">
                    <PhoneWithLogo phoneNumber="+33631420045" />
                </div> 
                <div onClick={e=>setToggleModal(true)} className="absolute w-10 h-10 right-1 bottom-0">
                    <Icon image="vectorchevronBottom" size="light"/>
                </div>
            </>
        )
    }

    const openModal = ()=>{
        return(
            <>
                <Text textSize="normal" color="purple">
                    Contactez directement <b>Nicolas</b> votre conseiller local:
                </Text>
                <div className="flex mt-5 items-center">
                    <PhoneWithLogo phoneNumber="+33631420045" />
                </div> 
                <div onClick={e=>setToggleModal(false)} className="absolute w-10 h-10 right-1 bottom-0">
                    <Icon image="vectorchevronTop" size="light"/>
                </div>
                <Text textSize="normal" color="purple" marginY="mt-3">
                    Si vous avez une question concernant <b>votre projet</b>, le resultat de <b>votre estimation</b> ou si vous souhaitez un rendez-vous dans les 48h, contactez directement <b>Nicolas</b> qui se fera un plaisir de vous conseiller.
                </Text>
            </>
        )
    }

    return (
        <div className='p-3 px-7 pt-7 w-80 bg-white shadow-xl fixed bottom-20 right-14 z-50 rounded-xl'>
            <div className="absolute h-14 bg-white w-14 -top-6 -left-6 rounded-full overflow-hidden">
                <Image priority src="/femme.jpg" layout='fill' objectFit='cover' alt='conseiller'/>
            </div>
            <p className='text-orange absolute -top-4 left-10 text-xl font-bold bg-white py-1 px-3 rounded-lg'>Nouveau</p>
            {toggleModal ? openModal() : closeModal()}
        </div>
    );
};

export default ContactModal;