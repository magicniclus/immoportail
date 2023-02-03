import React from "react";
import Text from "../Atoms/texts/Text";
import TitlePrimary from "../Atoms/titles/TitlePrimary";
import SeparationLign from "../Atoms/others/SeparationLign";
import TitleSecondary from "../Atoms/titles/TitleSecondary";
import SetOfAdvice from "./SetOfAdvice";

const SetOfImmoStep = (props) => {
  const textForAdvice = props.textForAdvice;
  const colorForAdvice = props.colorForAdvice;

  return (
    <div>
      <TitlePrimary
        text="Quelles sont les étapes "
        textWithColor="d’un projet immobilier ?"
        color="purple"
      />
      <SeparationLign color="yellow" marginY="my-4" />
      <div className="">
        <div className="my-10">
          <TitleSecondary
            marginY="mb-3"
            text="1. Déterminer la valeur de votre bien"
            color="purple"
          />
          <Text textSize="light" color="purple">
            La première étape dans le processus de vente immobilière consiste à
            déterminer la valeur de votre bien. Cela peut être fait en
            consultant un agent immobilier ou en utilisant des outils en ligne
            pour évaluer la valeur de votre propriété. L'évaluation de votre
            bien est importante car cela déterminera le prix que vous pouvez en
            demander. Une estimation précise peut également vous aider à éviter
            de sur-estimer ou de sous-estimer votre bien.
          </Text>
        </div>
        <div className="my-10">
          <TitleSecondary
            marginY="mb-3"
            text="2. Préparer votre bien pour la vente"
            color="purple"
          />
          <Text textSize="light" color="purple">
            Une fois la valeur de votre bien déterminée, la prochaine étape
            consiste à le préparer pour la vente. Cela peut inclure la
            réparation de tout défaut, la mise en valeur de votre bien en
            améliorant son apparence et en mettant en évidence ses
            caractéristiques les plus attrayantes. Les petits travaux de
            rénovation peuvent faire une grande différence dans l'attrait de
            votre bien pour les acheteurs potentiels. La mise en valeur de votre
            bien peut également aider à maximiser le prix que vous pouvez en
            obtenir.
          </Text>
        </div>
        <SetOfAdvice
          size="long"
          title="Notre conseil"
          text="Diffuser une annonce immobilière peut coûter cher pour un particulier qui cherche à la faire remonter en tête des résultats. Pour éviter cela, il est judicieux de faire appel à un professionnel doté de partenariats avec les plateformes les plus populaires. "
        />
        <div className="my-10">
          <TitleSecondary
            marginY="mb-3"
            text="3. Trouver le bon acheteur"
            color="purple"
          />
          <Text textSize="light" color="purple">
            Une fois que votre bien est prêt pour la vente, la prochaine étape
            consiste à trouver un acheteur potentiel. Passer par une agence
            immobilière peut vous donner accès à un grand nombre de potentiels
            acheteurs. Les agents immobiliers sont également en mesure de vous
            aider à trouver les meilleurs acheteurs en fonction de vos objectifs
            de vente et de la valeur de votre bien. Ils peuvent également gérer
            les offres et les négociations pour vous.
          </Text>
        </div>
        <div className="my-10">
          <TitleSecondary
            marginY="mb-3"
            text="4. Finaliser la vente "
            color="purple"
          />
          <Text textSize="light" color="purple">
            La dernière étape consiste à finaliser la vente de votre bien. Cela
            peut inclure la signature de contrats et la finalisation de toutes
            les formalités administratives nécessaires. Les agents immobiliers
            peuvent vous aider à naviguer à travers ce processus pour vous
            assurer que la vente se déroule en douceur et sans encombre. Ils
            peuvent également vous aider à gérer les problèmes qui peuvent
            survenir au cours de ce processus
          </Text>
        </div>
      </div>
    </div>
  );
};

export default SetOfImmoStep;
