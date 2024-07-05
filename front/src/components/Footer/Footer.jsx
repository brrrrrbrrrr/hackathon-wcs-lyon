import style from "../Footer/Footer.module.css"
import { Link } from "react-router-dom"

export default function Footer(){

    return (
      <div className={style.containerFooter}>
        <div className={style.link}>
          <Link to="/about">Contact </Link>
          <Link to="/about">A propos</Link>
        </div>
        <p className={style.footerText}>Copyright © 2024</p>
      </div>
    );
}
