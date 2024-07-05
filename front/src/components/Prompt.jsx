import { useState } from 'react';
import styles from '../components/Prompt.module.css'
import postQuestion from '../services/openAi';

const Prompt = () => {
  const [question, setQuestion] = useState('');
  const [response, setReponse] = useState('');

  const handleInputChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Appeler la fonction onQuestionSubmit avec la question saisie

    postQuestion(question, setReponse);
    // Réinitialiser l'état après avoir soumis la question
    setQuestion('');
  };
  return (
    <div className={styles.promptContainerIa}>
      <h2>Bonjour,</h2>
      <h3>Je suis <strong> Alex</strong> votre guide</h3>
      
      <form onSubmit={handleSubmit} className={styles.PromptCard}>
      <p className={styles.p1}> Besoin d'un petit coup de pouce ? </p>
        <label htmlFor='questionInput'>Vous souhaitez savoir si vous votre question est appropriée pour un entretien</label>
        <input
        placeholder='Posez-votre question ici '
          type='text'
          id='questionInput'
          value={question}
          onChange={handleInputChange}
          required
        />
        <button type='submit'>Envoyer</button>
      </form>
      {response && <p>{response.content} </p>}
      </div>
  );
};

export default Prompt;
