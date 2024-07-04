import PropTypes from "prop-types"
import imageArticle from "../../assets/images/2peoples.jpg"
import styles from "../ArticleCard/ArticleCard.module.css"


const articles = [
    {
      id: 1,
      image:imageArticle,
      alt : "description image",
      title : "Qu'est ce que l'inclusion ? ",
      firstSentences :"L’inclusion dans le monde du travail fait référence à la pratique d’accueillir et de valoriser activement la diversité parmi les employés, les clients ",
      date : "22/09/2022",

    },

    {
      id: 2,
      image:imageArticle,
      alt : "description image",
      title : "Qu'est ce que l'inclusion ? ",
      firstSentences :"L’inclusion dans le monde du travail fait référence à la pratique d’accueillir et de valoriser activement la diversité parmi les employés, les clients ",
      date : "22/09/2022",

    },
    {
      id: 3,
      image: imageArticle,
      alt : "description image",
      title : "Qu'est ce que l'inclusion ? ",
      firstSentences :"L’inclusion dans le monde du travail fait référence à la pratique d’accueillir et de valoriser activement la diversité parmi les employés, les clients ",
      date : "22/09/2022",

    },
    {
      id: 3,
      image:imageArticle,
      alt : "description image",
      title : "Qu'est ce que l'inclusion ? ",
      firstSentences :"L’inclusion dans le monde du travail fait référence à la pratique d’accueillir et de valoriser activement la diversité parmi les employés, les clients ",
      date : "22/09/2022",

    }
   
    
  ];

  ArticleCard.propTypes = {
    article: PropTypes.shape({
    image: PropTypes.string.isRequired,
    alt : PropTypes.string.isRequired,
     title : PropTypes.string.isRequired,
     firstSentences : PropTypes.string.isRequired,
     date : PropTypes.string.isRequired,
     
    }).isRequired,
  };

  export default function ArticleCard() {
    return (
      <div className={styles.containerArticle}>
        {articles.map((article, index) => (
          <div key={article.id} className={`${styles.ArticleCard} ${styles[`div${index + 1}`]}`}>
            <img src={article.image} alt={article.title} />
            <h2>{article.title}</h2>
            <p>{article.firstSentences}</p>
            <h4>{article.date}</h4>
          </div>
        ))}
      </div>
    );
  }