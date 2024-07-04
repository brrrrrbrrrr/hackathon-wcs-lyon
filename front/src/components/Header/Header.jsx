import style from "../Header/Header.module.css"

import BurgerMenu from "../BurgerMenu/BurgerMenu"



export default function Header(){

    return(

        <div className={style.containerHeader}>
            <BurgerMenu className={style.menu}/>
            <img className={style.logo} src="/" />

        </div>
    )
}