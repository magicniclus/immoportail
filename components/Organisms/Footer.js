import Link from 'next/link';
import React from 'react';
import Logo from '../Atoms/logos/Logo';
import TitleSecondary from '../Atoms/titles/TitleSecondary';
import InputWithLogo from '../Atoms/inputs/InputWithLogo';
import ButtonPrimary from '../Atoms/buttons/ButtonPrimary';

const Footer = () => {
    return (
        <footer className="w-full py-20 px-5 lg:px-40 lg:flex lg:justify-between bg-gray-300 lg:flex-row flex-col">
            <div className="lg:w-4/12 w-8/12">
                <ul>
                    <li className='mb-3 text-purple text-base md:text-xl'>
                        <Link href="/">Mon espace</Link>
                    </li>
                    <li className='mb-3 text-purple text-base md:text-xl'>
                        <Link href="/">Espace partenaire</Link>
                    </li>
                    <li className='mb-3 text-purple text-base md:text-xl'>
                        <Link href="/">Nous contacter</Link>
                    </li>
                    <li className='mb-3 text-purple text-base md:text-xl'>
                        <Link href="/">Politique de confidentialité</Link>
                    </li>
                </ul>
                <p className='text-purple text-base md:text-xl'>© immoportail.fr 2022</p>
            </div>
            <form className="flex flex-col justify-between items-start lg:items-end lg:w-4/12 w-8/12 lg:h-auto h-64 my-7 lg:m-0">
                <Logo />
                <TitleSecondary text="S’inscrire à notre news letters" color="purple" />
                <InputWithLogo placeholder="Saisir un email" image="/vector/Vectorletter.png" color="white" />
                <ButtonPrimary text="S'inscrire" version="primary" />
            </form>
        </footer>
    );
};

export default Footer;