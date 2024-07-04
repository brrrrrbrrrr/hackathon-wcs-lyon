import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import questions from '../Questions.js';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import DangerousIcon from '@mui/icons-material/Dangerous';
import styles from '../../components/QuizzCard/QuizzCard.module.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

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
    nextQuestion();
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
                transition={{ duration: 0.4 }}
                className={`${styles.question} ${
                  index % 2 === 0 ? styles.question_left : styles.question_right
                }`}
              >
                <h4 className={styles.h4Questions}>{question.question}</h4>
                {index === currentQuestionIndex && (
                  <div className={styles.icons}>
                    <DoneOutlineIcon
                      onClick={() => handleValidation(true)}
                      style={{ cursor: 'pointer', color: '#1b3759' }}
                    />
                    <DangerousIcon
                      onClick={() => handleValidation(false)}
                      style={{ cursor: 'pointer', color: '#c2521f' }}
                    />
                  </div>
                )}
              </motion.div>
            ))}
          <div className={styles.navigation_buttons}>
            <IconButton
              onClick={prevQuestion}
              disabled={currentQuestionIndex === 0}
              className={styles.buttonQuizz}
            >
              <ArrowBackIosIcon />
            </IconButton>
            {currentQuestionIndex < questions.length - 1 ? (
              <IconButton onClick={nextQuestion} className={styles.buttonQuizz}>
                <ArrowForwardIosIcon />
              </IconButton>
            ) : (
              <IconButton
                onClick={validateAnswers}
                className={styles.buttonQuizz}
              >
                <CheckIcon />
              </IconButton>
            )}
          </div>
        </AnimatePresence>
      ) : (
        <div>
          <p className={styles.score}>
            Score: {score} / {questions.length}
          </p>
          <ul>
            {questions.map((el, index) => (
              <li
                key={index}
                className={`${styles.question_item} ${
                  el.status.includes('Non inclusive')
                    ? styles.non_inclusive
                    : ''
                }`}
              >
                <h4 className={styles.h4Questions}>{el.question}</h4>
                <p>
                  {el.status}
                  {incorrectQuestions.includes(index) && (
                    <span className={styles.error_message}>
                      {' '}
                      - Vous aviez sélectionné le contraire.
                    </span>
                  )}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default QuizzCard;
