import style from '../Header/Header.module.css';
import profil1 from '../../assets/images/profil1.jpg';
import profil2 from '../../assets/images/profil2.jpg';
import profil3 from '../../assets/images/profil3.jpg';
import profil5 from '../../assets/images/profil5.jpg';
import profil6 from '../../assets/images/profil6.jpg';
import profil7 from '../../assets/images/profil7.jpg';

export default function Header() {
  return (
    <div className={style.parentContainer}>
      <div className={style.welcomeContainer}>
        <h2 className={style.welcomeTitle}>
          Bienvenu chez <span className={style.bienvenoSpan}>Bienveo</span>
        </h2>
        <div className={style.welcomeP}>
          <p>La solution à vos entretiens 100% inclusifs</p>
        </div>
      </div>
      <div className={style.parent}>
        <div className={`${style.div1} ${style.imageContainer}`}>
          <img src={profil1} alt='Profil 1' className={style.image} />
        </div>
        <div className={`${style.div2} ${style.imageContainer}`}>
          <img src={profil2} alt='Profil 2' className={style.image} />
        </div>
        <div className={`${style.div3} ${style.imageContainer}`}>
          <img src={profil3} alt='Profil 3' className={style.image} />
        </div>
        <div className={`${style.div4} ${style.imageContainer}`}>
          <img src={profil5} alt='Profil 5' className={style.image} />
        </div>

        <div className={`${style.div5} ${style.imageContainer}`}>
          <img src={profil6} alt='Profil 6' className={style.image} />
        </div>
        <div className={`${style.div6} ${style.imageContainer}`}>
          <img src={profil7} alt='Profil 7' className={style.image} />
        </div>
      </div>
    </div>
  );
}
