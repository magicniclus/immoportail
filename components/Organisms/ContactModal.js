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
                <div onClick={e=>setToggleModal(false)} className="cursor-pointer absolute w-6 h-6 md:w-10 right-3 bottom-2 md:h-10 md:right-1 md:bottom-0">
                    <Icon image="Vectorclose" size="extraLight" />
                </div>
            </>
        )
    }
    
    const closeModal = ()=>{
        return(
            <>
                <PhoneWithLogo phoneNumber="Contact" />
                <div onClick={e=>setToggleModal(true)} className="cursor-pointer absolute w-4 h-4 md:w-6 md:h-6 right-2 bottom-2 md:right-4 md:bottom-3">
                    <Icon image="vectorchevronBottom" size="light"/>
                </div>
            </>
        )
    }

    return (
        <div className={!toggleModal ? 'p-3 px-7 pt-3 md:pt-7 w-36 md:w-52 bg-white shadow-xl fixed bottom-5 right-5 md:bottom-20 md:right-14 z-50 rounded-xl' : 'p-3 px-7 pt-7 w-80 bg-white shadow-xl fixed bottom-10 right-7 md:bottom-20 md:right-14 z-50 rounded-xl'}>
            <div className="absolute bg-white w-10 h-10 md:w-14 md:h-14 -top-3 -left-3 md:-top-6 md:-left-6 rounded-full overflow-hidden">
                <Image priority src="/femme.jpg" layout='fill' objectFit='cover' alt='conseiller'/>
            </div>
            {
                !toggleModal ? <p className='text-orange absolute -top-4 left-10 text-sm md:text-xl font-bold bg-white py-1 px-3 rounded-lg'>Nouveau</p> : null
            }
            <div className="hidden md:block">
                {toggleModal ? openModal() : closeModal()}
            </div>
            <div className="flex md:hidden">
                <PhoneWithLogo text="Contact" phoneNumber="+33631420045" />
            </div>
        </div>
    );
};

export default ContactModal;