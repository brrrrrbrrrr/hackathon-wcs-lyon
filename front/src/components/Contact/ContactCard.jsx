import style from "../Contact/ContactCard.module.css"

export default function Contact(){
    return (
      <div className={style.containercontact}>
        <h1 className={style.title}>Contact</h1>
        <p className={style.text}>
          Une question, une remarque, ou tout autre raison, vous pouvez
          nous contacter via le formulaire ci dessous.
        </p>
        <form method="post">
          <ul className={style.formulaire}>
            <li className={style.champs}>
              <label htmlFor="lastname">Nom:</label>
              <input type="text" id="lastname" name="lastname" />
            </li>
            <li className={style.champs}>
              <label htmlFor="firstname">Prénom:</label>
              <input type="text" id="firstname" name="firstname" />
            </li>
            <li className={style.champs}>
              <label htmlFor="mail">E-mail:</label>
              <input type="email" id="mail" name="mail" />
            </li>
            <li className={style.champs}>
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message"></textarea>
            </li>
          </ul>
        </form>
        <div className={style.button}>
          <button type="submit">Envoyer le message</button>
        </div>
      </div>
    );
}