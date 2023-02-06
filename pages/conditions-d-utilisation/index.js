import React from "react";
import Layout from "../../components/Layout/Layout";

const Index = () => {
  return (
    <Layout>
      <div className="min-h-[calc((100vh-7rem))] w-full flex mx-auto flex-col justify-center md:max-w-screen-2xl md:py-5 px-10 item my-10 text-purple">
        <h1 className="text-2xl mb-5 mx-auto">
          Conditions d&apos;utilisation d&apos;Avenue-Immo
        </h1>
        <p className="mt-5">
          1. Acceptation des conditions dd&apos;utilisation : en utilisant
          Avenue-Immo, vous acceptez les présentes conditions
          dd&apos;utilisation. Si vous nd&apos;êtes pas dd&apos;accord avec ces
          conditions, veuillez ne pas utiliser ld&apos;application.
        </p>
        <p className="mt-5">
          2. Utilisation de ld&apos;application : Avenue-Immo est un site
          dd&apos;estimation immobilière en ligne qui vous permet de recevoir
          une estimation rapide et précise de la valeur de votre bien
          immobilier. Vous pouvez utiliser ld&apos;application pour des fins
          personnelles uniquement. Toute utilisation commerciale est interdite
          sans autorisation préalable.
        </p>
        <p className="mt-5">
          3.Responsabilité : Avenue-Immo nd&apos;est pas responsable de la
          qualité, de la précision, de la fiabilité ou de la disponibilité des
          informations ou des services proposés par ld&apos;application. Nous
          nous efforçons de fournir des informations fiables, mais les
          estimations fournies ne sont pas garanties et peuvent être influencées
          par de nombreux facteurs, tels que les conditions du marché local,
          ld&apos;état général du bien immobilier, et dd&apos;autres facteurs.
        </p>
        <p className="mt-5">
          4. Propriété intellectuelle : Avenue-Immo est protégé par les lois sur
          la propriété intellectuelle. Vous ne pouvez pas reproduire,
          distribuer, afficher, vendre, louer, transmettre ou créer des œuvres
          dérivées à partir de ld&apos;application sans autorisation préalable.
        </p>
        <p className="mt-5">
          5. Modification des conditions dd&apos;utilisation : Avenue-Immo se
          réserve le droit de modifier les présentes conditions
          dd&apos;utilisation à tout moment et sans préavis. Il est de votre
          responsabilité de vérifier régulièrement les conditions
          dd&apos;utilisation pour vous assurer de les accepter.
        </p>
        <p className="mt-5">
          6. Loi applicable : Les présentes conditions dd&apos;utilisation sont
          régies par les lois française. Tout litige découlant de
          ld&apos;utilisation de ld&apos;application sera résolu selon les lois
          de française.
        </p>
        <p className="mt-5">
          En utilisant Avenue-Immo, vous acceptez les présentes conditions
          dd&apos;utilisation. Si vous avez des questions ou des commentaires,
          veuillez nous contacter à casteranicolas.contact@gmail.com.
        </p>
      </div>
    </Layout>
  );
};

export default Index;
