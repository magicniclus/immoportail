import React, { useEffect, useState } from "react";
import LayoutEstimation from "../../../components/Layout/LayoutEstimation";
import TitlePrimary from "../../../components/Atoms/titles/TitlePrimary";
import Text from "../../../components/Atoms/texts/Text";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { updateStepOfProjectProgress } from "../../../redux/action";

const Index = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const state = useSelector((state) => state);

  const [elementOne, setElementOne] = useState(false);
  const [elementTwo, setElementTwo] = useState(false);
  const [elementThree, setElementThree] = useState(false);

  useEffect(() => {
    dispatch(updateStepOfProjectProgress("analyse"));
  }, []);

  useEffect(() => {
    if (state.estimationElements.accommodation === null) {
      router.push("/estimation-immobiliere");
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setElementOne(true);
    }, 1000);
    setTimeout(() => {
      setElementTwo(true);
    }, 1700);
    setTimeout(() => {
      setElementThree(true);
    }, 3000);
    setTimeout(() => {
      router.push("/estimation-immobiliere/derniere-etape");
    }, 5000);
  }, []);

  return (
    <LayoutEstimation>
      <div className=" m-auto flex flex-col justify-center md:max-w-screen-2xl px-10 md:px-0">
        <div className="flex">
          <div className=" animate-spin flex justify-center items-center">
            <Image
              width={50}
              height={50}
              src="/vector/spinner.png"
              alt="spinner"
            />
          </div>
          <div className="md:w-full ml-7">
            <TitlePrimary
              text="Analyse de vos données"
              color="purple"
              updateWidth="6/6"
              updateWeight="font-light"
            />
            <Text textSize="titleCard" color="purple">
              Veuillez patienter, nous calculons votre estimation...
            </Text>
          </div>
        </div>
        <div className="flex mt-10  w-12/12">
          <div className="">
            <div
              className={`flex ${!elementOne ? "opacity-30" : "opacity-100"}`}
            >
              <div className="h-6 w-6 relative">
                <Image
                  src={
                    !elementOne
                      ? "/vector/Ellipse.png"
                      : "/vector/checkRoundedYellow.png"
                  }
                  alt="check"
                  layout="fill"
                />
              </div>
              <Text marginX="ml-5" textSize="normalLight" color="purple">
                Validation des caractéristiques de votre bien
              </Text>
            </div>
            <div
              className={`flex mt-7 ${
                !elementTwo ? "opacity-30" : "opacity-100"
              }`}
            >
              <div className="h-6 w-6 relative">
                <Image
                  src={
                    !elementTwo
                      ? "/vector/Ellipse.png"
                      : "/vector/checkRoundedYellow.png"
                  }
                  alt="check"
                  layout="fill"
                />
              </div>
              <Text marginX="ml-5" textSize="normalLight" color="purple">
                Validation de l’emplacement de votre bien
              </Text>
            </div>
            <div
              className={`flex mt-7 ${
                !elementThree ? "opacity-30" : "opacity-100"
              }`}
            >
              <div className="h-6 w-6 relative">
                <Image
                  src={
                    !elementThree
                      ? "/vector/Ellipse.png"
                      : "/vector/checkRoundedYellow.png"
                  }
                  alt="check"
                  layout="fill"
                />
              </div>
              <Text marginX="ml-5" textSize="normalLight" color="purple">
                Calcul de votre estimation
              </Text>
            </div>
          </div>
        </div>
      </div>
    </LayoutEstimation>
  );
};

export default Index;
