import style from "../About/AboutPage.module.css"

import corporate from "../../assets/images/team.jpg"
import Contact from "../../components/Contact/ContactCard"

export default function About(){

    return (
      <div className={style.containerabout}>
        <h1 className={style.title}>A propos</h1>
        <img src={corporate} />

        <div className={style.description}>
          <section>
            <h2 className={style.subtitle}>Notre mission</h2>
            <p className={style.descrition}>
              Chez Bienvéo, nous croyons en un monde du travail plus inclusif et
              équitable. Nous avons donc créé une application RH spécialement
              conçue pour révolutionner les processus d entretien d embauche.
              Notre objectif est de permettre aux entreprises de mener des
              entretiens véritablement inclusifs, en mettant l accent sur
              l équité, la diversité et l inclusion.
            </p>
          </section>
          <section>
            <h2 className={style.subtitle}>Pourquoi Bienvéo?</h2>
            <p className={style.descrition}>
              Le nom Bienvéo est le reflet de notre vision et de nos valeurs.
              Il est composé de deux parties : Bien : Ce terme français
              signifie bon ou bien, soulignant notre engagement envers les
              bonnes pratiques et lamélioration continue des processus RH.
              Véo : Dérivé du verbe espagnol ver (voir), veo signifie je
              vois. Cela symbolise notre engagement à voir au-delà des
              apparences, des préjugés et des biais inconscients, pour mieux
              comprendre et valoriser chaque candidat. Ensemble, Bienvéo
              incarne notre mission : offrir une vision claire et positive des
              talents diversifiés et favoriser un recrutement plus juste et plus
              humain.
            </p>
          </section>
          <section>
            <h2 className={style.subtitle}>Nos valeurs</h2>
            <div className={style.descrition}>
              <p className={style.firstvalue}>
                <str>Inclusion</str> : Nous nous engageons à créer des outils
                qui favorisent l inclusion et la diversité dans le processus de
                recrutement. Innovation : Nous innovons constamment pour offrir
                des solutions RH avancées, garantissant des entretiens
                équitables et efficaces. Bienveillance : Nous plaçons la
                bienveillance au cœur de nos interactions, assurant un
                traitement respectueux et humain de chaque candidat.
              </p>
              <p className={style.secondvalue}>
                <str>Innovation :</str>Nous innovons constamment pour offrir des
                solutions RH avancées, garantissant des entretiens équitables et
                efficaces.Bienveillance : Nous plaçons la bienveillance au cœur
                de nos interactions, assurant un traitement respectueux et
                humain de chaque candidat.
              </p>
              <p className={style.thirdvalue}>
                <str>Bienveillance :</str>Nous plaçons la bienveillance au cœur
                de nos interactions, assurant un traitement respectueux et
                humain de chaque candidat.
              </p>
            </div>
          </section>
          <section>
            <h2 className={style.subtitle}>Ce que nous offrons</h2>
            <div className={style.descrition}>
              <p className={style.offers}>
                Bienvéo propose une application RH intuitive et innovante,
                équipée de fonctionnalités avancées pour les entretiens
                inclusifs : Guides d entretien personnalisés : Des outils pour
                structurer les entretiens de manière équitable. Évaluation sans
                biais : Techniques et algorithmes pour minimiser les biais
                inconscients. Feedback constructif : Outils pour offrir des
                retours détaillés et constructifs aux candidats. Formation à
                l inclusivité : Modules de formation pour recruteurs sur les
                meilleures pratiques en matière d inclusivité et de diversité.
              </p>
            </div>
          </section>
          <section>
            <h2 className={style.subtitle}>Rejoignez nous!</h2>
            <div className={style.descrition}>
              <p className={style.welcome}>
                Chez Bienvéo, nous sommes convaincus que chaque individu mérite
                d être vu pour son potentiel unique. Rejoignez-nous dans notre
                mission de transformer les processus d entretien et de créer un
                avenir du travail où chacun a sa place. Pour en savoir plus sur
                notre application et nos services, n hésitez pas à nous
                contacter. Ensemble, faisons de l inclusivité une réalité
                tangible dans le monde du travail.
              </p>
            </div>
          </section>
        </div>
        <div className={style.contact}>
          <Contact />
        </div>
      </div>
    );
}
