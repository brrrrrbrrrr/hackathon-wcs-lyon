import PropTypes from "prop-types"
import imageArticle from "../../assets/images/2peoples.jpg"
import styles from "../ArticleCard/ArticleCard.module.css"


const articles = [
    {
      id: 1,
      image:{imageArticle},
      title : "Qu'est ce que l'inclusion ? ",
      firstSentences :"L’inclusion dans le monde du travail fait référence à la pratique d’accueillir et de valoriser activement la diversité parmi les employés, les clients ",
      date : "22/09/2022",

    },
   
    
  ];

  ArticleCard.propTypes = {
    pokemon: PropTypes.shape({
    image: PropTypes.string.isRequired,
     title : PropTypes.string.isRequired,
     firstSentences : PropTypes.string.isRequired,
     date : PropTypes.string.isRequired,
     
    }).isRequired,
  }

export default function ArticleCard () {

   

return (
    <>
     {articles.map((article)=>(
        <div key={article.id}>
            <div className={styles.ArticleCard}>
        <img src={article.image}/>
        <h2> {article.title}</h2>
        <p>{article.firstSentences}</p>
        <h4>{article.date} </h4>
        </div>
        </div>
        ))}
        </>
    );
}
