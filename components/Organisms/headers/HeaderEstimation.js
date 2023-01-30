import Link from "next/link";
import React from "react";
import Logo from "../../Atoms/logos/Logo";
import TitleSecondary from "../../Atoms/titles/TitleSecondary";
import TitleTertiary from "../../Atoms/titles/TitleTertiary";

const HeaderEstimation = () => {
  return (
    <div className="w-screen z-20 bg-white h-28 drop-shadow-md flex items-center px-5 lg:px-40">
      <div className=" items-baseline lg:flex-row w-full lg:flex flex-col mx-auto ">
        {/* Left container */}
        <Link href="/">
          <Logo />
        </Link>
        {/* Right container */}
        <div className="lg:ml-5 flex justify-start">
          <TitleTertiary
            text="Votre estimation en ligne en "
            textWithColor="2 minutes"
            color="purple"
            marginY="font-light text-left"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderEstimation;
