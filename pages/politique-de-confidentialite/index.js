import React from "react";
import Layout from "../../components/Layout/Layout";
import Link from "next/link";

const Index = () => {
  return (
    <Layout>
      <div className="min-h-[calc((100vh-7rem))] w-full flex mx-auto flex-col justify-center md:max-w-screen-2xl md:py-5 px-10 item my-10 text-purple">
        <h1 className="text-2xl mb-5 mx-auto">Politique de confidentialité</h1>
        <h2 className="mt-5">1-PREAMBULE</h2>
        <p className="mt-3">
          Cette politique de confidentialité décrit les pratiques de immo-sur.fr
          en matière de collecte, d&apos;utilisation, de conservation et de
          protection des informations personnelles des utilisateurs du site. En
          utilisant ce site, vous acceptez les termes et conditions de cette
          politique de confidentialité. Si vous n&apos;acceptez pas ces termes,
          veuillez ne pas utiliser le site.
        </p>
        <h2 className="mt-5">2-DÉFINITIONS</h2>
        <p className="mt-3">
          Les termes &quot;vous&quot; et &quot;utilisateur&quot; désignent toute
          personne qui accède, utilise ou consulte le site avenue-immo.com. Les
          termes &quot;nous&quot;, &quot;notre&quot; et
          &quot;avenue-immo.com&quot; désignent le propriétaire et exploitant du
          site.
        </p>
        <h2 className="mt-5">
          3-CHAMP D&apos;APPLICATION, ACCEPTATION ET MODIFICATION DES CGU
        </h2>
        <p className="mt-3">
          Cette politique de confidentialité s&apos;applique à toutes les
          informations personnelles collectées ou soumises sur le site
          avenue-immo.com. Nous nous réservons le droit de modifier cette
          politique de temps à autre sans préavis. Votre utilisation continue du
          site constitue votre acceptation de toutes les modifications apportées
          à cette politique.
        </p>
        <h2 className="mt-5">4-ACCES ET DISPONIBILITE DES SERVICES</h2>
        <p className="mt-3">
          Nous nous efforçons de maintenir le site disponible en continu, mais
          n&apos;assumons aucune responsabilité pour toute interruption ou
          défaillance du site ou des services.
        </p>
        <h2 className="mt-5">5-GARANTIES - RESPONSABILITE - FORCE MAJEURE</h2>
        <p className="mt-3">
          Vous utilisez le site à vos propres risques. Nous ne garantissons pas
          que le site sera exempt de bugs ou d&apos;erreurs, ni que les défauts
          seront corrigés. Nous ne serons pas responsables de tout dommage
          direct ou indirect, y compris sans limitation, la perte de bénéfices,
          de données ou d&apos;autres pertes similaires.
        </p>
        <h2 className="mt-5">6-RECLAMATION - ASSISTANCE TECHNIQUE</h2>
        <p className="mt-3">
          Si vous rencontrez des problèmes techniques avec le site, veuillez
          nous en informer. Nous nous efforcerons de les résoudre dans les
          meilleurs délais.
        </p>
        <h2 className="mt-5">7-PROPRIÉTÉ INTELLECTUELLE</h2>
        <p className="mt-3">
          Le contenu du site, y compris sans limitation les textes, images, sons
          et vidéos, est protégé par les lois sur le droit d&apos;auteur et les
          autres lois sur la propriété intellectuelle. Vous ne pouvez pas
          reproduire, distribuer, publier ou transmettre ce contenu sans notre
          autorisation écrite préalable.
        </p>
        <h2 className="mt-5">8-DISPOSITIONS DIVERSES</h2>
        <p className="mt-3">
          7.1. Cette politique de confidentialité constitue l&apos;intégralité
          de l&apos;accord entre l&apos;utilisateur et avenue-immo.com en ce qui
          concerne l&apos;utilisation de ses services.
        </p>
        <p className="mt-3">
          7.2. Tout manquement à l&apos;une des obligations prévues dans cette
          politique de confidentialité peut entraîner la résiliation immédiate
          des services sans préjudice de tous dommages et intérêts auxquels
          avenue-immo.com pourrait prétendre.
        </p>
        <p className="mt-3">
          7.3. Si une disposition de cette politique de confidentialité est
          jugée illégale, nulle ou inapplicable, cette disposition sera réputée
          séparable et n&apos;affectera pas la validité et l&apos;applicabilité
          des dispositions restantes.
        </p>
        <p className="mt-3">
          7.4. avenue-immo.com se réserve le droit de modifier cette politique
          de confidentialité à tout moment en publiant une nouvelle version sur
          son site web. Les utilisateurs sont tenus de se tenir informés de tout
          changement en consultant régulièrement cette politique de
          confidentialité.
        </p>
        <h2 className="mt-5">10-DROIT APPLICABLE ET REGLEMENT DES LITIGES</h2>
        <p className="mt-3">
          8.1. Tout litige relatif à l&apos;utilisation des services
          d&apos;avenue-immo.com sera soumis au droit français.
        </p>
        <p className="mt-3">
          8.2. En cas de litige, les parties s&apos;efforceront de trouver une
          solution à l&apos;amiable. En cas d&apos;échec, les litiges seront
          soumis aux tribunaux compétents.
        </p>
        <h2 className="mt-5">
          10-PROTECTION DES DONNEES A CARACTERE PERSONNEL
        </h2>
        <p className="mt-3">
          9.1. Avenue-immo.com s&apos;engage à protéger les données personnelles
          de ses utilisateurs conformément à la réglementation applicable en
          matière de protection des données personnelles, notamment le Règlement
          Général sur la Protection des Données (RGPD).
        </p>
        <p className="mt-3">
          9.2. Avenue-immo.com ne collecte que les données nécessaires à
          l&apos;exécution de ses services. Les données collectées sont traitées
          de manière confidentielle et ne sont pas transmises à des tiers sans
          le consentement de l&apos;utilisateur.
        </p>
        <p className="mt-3">
          9.3. L&apos;utilisateur a le droit de demander l&apos;accès à ses
          données personnelles, de les rectifier ou de les effacer en se
          connectant à son compte ou en envoyant une demande écrite{" "}
          <Link href="/unsubscribe">ici</Link>.
        </p>
        <p className="mt-3">
          9.4. Avenue-immo.com prend les mesures de sécurité appropriées pour
          protéger les données personnelles de ses utilisateurs contre tout
          accès non autorisé, toute modification, tout usage illicite ou toute
          perte accidentelle.
        </p>
      </div>
    </Layout>
  );
};

export default Index;
