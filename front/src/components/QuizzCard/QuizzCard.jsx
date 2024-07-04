/* eslint-disable no-undef */
import { useState } from 'react';
import questions from '../Questions.js';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import DangerousIcon from '@mui/icons-material/Dangerous';
import styles from '../../components/QuizzCard/QuizzCard.module.css';

const QuizzCard = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [validationStates, setValidationStates] = useState(
    questions.map(() => null)
  );
  const [score, setScore] = useState(null);
  const [incorrectQuestions, setIncorrectQuestions] = useState([]);

  const handleValidation = (isValid) => {
    const updatedValidationStates = [...validationStates];
    updatedValidationStates[currentQuestionIndex] = isValid;
    setValidationStates(updatedValidationStates);
  };

  const validateAnswers = () => {
    let correctAnswers = 0;
    const incorrectIndices = [];

    questions.forEach((question, index) => {
      const isValid = validationStates[index];
      if (
        (question.status === 'Inclusive et respecte la législation' &&
          isValid === true) ||
        (question.status ===
          'Non inclusive et ne respecte pas la législation (discriminatoire)' &&
          isValid === false)
      ) {
        correctAnswers++;
      } else {
        incorrectIndices.push(index);
      }
    });

    setScore(correctAnswers);
    setIncorrectQuestions(incorrectIndices);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      {score === null ? (
        <div className={styles.question_container}>
          <h4
            className={`h4-question ${
              validationStates[currentQuestionIndex] === true
                ? 'correct'
                : validationStates[currentQuestionIndex] === false
                ? 'incorrect'
                : ''
            }`}
          >
            {currentQuestion.question}
          </h4>
          <DoneOutlineIcon
            onClick={() => handleValidation(true)}
            style={{ cursor: 'pointer', color: 'green' }}
          />
          <DangerousIcon
            onClick={() => handleValidation(false)}
            style={{ cursor: 'pointer', color: 'red' }}
          />
          <div className={styles.navigation_buttons}>
            <button
              onClick={prevQuestion}
              disabled={currentQuestionIndex === 0}
            >
              Précédent
            </button>
            {currentQuestionIndex < questions.length - 1 ? (
              <button onClick={nextQuestion}>Suivant</button>
            ) : (
              <button onClick={validateAnswers}>Valider les réponses</button>
            )}
          </div>
        </div>
      ) : (
        <div>
          <p>
            Score: {score} / {questions.length}
          </p>
          <ul>
            {questions.map((el, index) => (
              <li key={index} className={styles.question_item}>
                <h4
                  className={`h4-question ${
                    validationStates[index] === true
                      ? 'correct'
                      : validationStates[index] === false
                      ? 'incorrect'
                      : ''
                  }`}
                >
                  {el.question}
                </h4>
                {incorrectQuestions.includes(index) && (
                  <p className={styles.error_message}>Réponse incorrecte</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default QuizzCard;
