import React, { useState } from 'react';
import Text from '../Atoms/texts/Text';
import PhoneWithLogo from '../Molecules/PhoneWithLogo';
import Icon from '../Atoms/logos/Icon';
import Image from 'next/image';
import TitleSecondary from '../Atoms/titles/TitleSecondary';


const ContactModal = () => {

    const [toggleModal, setToggleModal]=useState(false)

    const openModal = ()=>{
        return (
            <>
                <Text textSize="normal" color="purple">
                    Pour un rendez-vous, une question sur votre projet ou estimation, contactez directement <b>Nicolas</b> votre conseiller local:
                </Text>
                <div className="flex mt-3 items-center">
                    <PhoneWithLogo phoneNumber="+33631420045" />
                </div> 
                <div onClick={e=>setToggleModal(false)} className="absolute w-10 h-10 right-1 bottom-0">
                    <Icon image="Vectorclose" size="extraLight" />
                </div>
            </>
        )
    }
    
    const closeModal = ()=>{
        return(
            <>
                <PhoneWithLogo phoneNumber="Contact" />
                <div onClick={e=>setToggleModal(true)} className="absolute w-10 h-10 right-1 bottom-0">
                    <Icon image="vectorchevronBottom" size="light"/>
                </div>
            </>
        )
    }

    return (
        <div className='p-3 px-7 pt-7 w-80 bg-white shadow-xl fixed bottom-20 right-14 z-50 rounded-xl'>
            <div className="absolute h-14 bg-white w-14 -top-6 -left-6 rounded-full overflow-hidden">
                <Image priority src="/femme.jpg" layout='fill' objectFit='cover' alt='conseiller'/>
            </div>
            {
                !toggleModal ? <p className='text-orange absolute -top-4 left-10 text-xl font-bold bg-white py-1 px-3 rounded-lg'>Nouveau</p> : null
            }
            
            {toggleModal ? openModal() : closeModal()}
        </div>
    );
};

export default ContactModal;