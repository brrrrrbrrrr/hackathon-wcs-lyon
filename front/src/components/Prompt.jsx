import React, { useState } from 'react';
import postQuestion from '../services/openAi';

const Prompt = (props) => {
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
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='questionInput'>Posez votre question :</label>
        <input
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
