/* eslint-disable no-undef */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    <div className={styles.question_container}>
      {score === null ? (
        <AnimatePresence>
          {questions
            .slice(0, currentQuestionIndex + 1)
            .map((question, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className={`${styles.question} ${
                  index % 2 === 0 ? styles.question_left : styles.question_right
                }`}
              >
                <h4
                  className={`h4-question ${
                    validationStates[index] === true
                      ? 'correct'
                      : validationStates[index] === false
                      ? 'incorrect'
                      : ''
                  }`}
                >
                  {question.question}
                </h4>
                {index === currentQuestionIndex && (
                  <div className={styles.icons}>
                    <DoneOutlineIcon
                      onClick={() => handleValidation(true)}
                      style={{ cursor: 'pointer', color: 'green' }}
                    />
                    <DangerousIcon
                      onClick={() => handleValidation(false)}
                      style={{ cursor: 'pointer', color: 'red' }}
                    />
                  </div>
                )}
              </motion.div>
            ))}
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
        </AnimatePresence>
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
