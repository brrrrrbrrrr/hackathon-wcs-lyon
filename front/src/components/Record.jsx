/* eslint-disable react/no-unescaped-entities */
import { useState, useRef, useEffect } from 'react';
import { startRecording, stopRecording } from '../services/record.js';
import IconButton from '@mui/material/IconButton';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import './Record.css'; // Fichier CSS pour les animations personnalisées

const Record = () => {
  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState('');
  const [resultText, setResultText] = useState('');
  const [loading, setLoading] = useState(false); // Nouvel état pour gérer le chargement

  const mediaRecorder = useRef(null);
  const audioChunks = useRef([]);

  const handleStartRecording = () => {
    startRecording(
      setRecording,
      setAudioURL,
      mediaRecorder,
      audioChunks,
      setResultText
    );
  };

  const handleStopRecording = () => {
    stopRecording(setRecording, mediaRecorder);
    setLoading(true); // Activer le chargement pendant l'attente de la réponse
  };

  const formatAnalysisText = (text) => {
    return text.split('\n').map((line, index) => <p key={index}>{line}</p>);
  };

  const isAudioAvailable = !!audioURL;

  useEffect(() => {
    if (resultText !== '') {
      setLoading(false); // Désactiver le chargement lorsque resultText n'est plus vide
    }
  }, [resultText]);

  return (
    <div>
      <p>
        Vous pouvez enregistrer vos entretiens pour avoir un feedback sur les
        questions que vous avez posées. Il est important de noter que vous ne
        devez pas enregistrer sans l'accord de votre interlocuteur.
      </p>
      <p style={{ marginTop: '10px', fontSize: '14px', marginBottom: '30px' }}>
        Speech : Afin de garantir un processus inclusif, nous proposons
        d'enregistrer cet entretien pour vous fournir un retour constructif sur
        nos questions. Si à un moment vous estimez qu'une question ne vous
        convient pas, n'hésitez pas à nous en faire part.
      </p>
      <Grid container justifyContent='center' alignItems='center'>
        <Grid item>
          <IconButton
            className={`record-button ${recording ? 'active' : ''}`}
            onClick={recording ? handleStopRecording : handleStartRecording}
            style={{
              backgroundColor: '#f5f5f5', // Couleur de fond du bouton (gris clair)
              borderRadius: '50%',
              width: '60px',
              height: '60px',
              marginBottom: '10px',
            }}
          >
            <FiberManualRecordIcon
              className={recording ? 'pulse-animation' : ''}
              style={{
                fontSize: '36px',
                color: recording ? '#f44336' : '#757575', // Couleur de l'icône (rouge quand enregistré, gris sinon)
              }}
            />
          </IconButton>{' '}
          {/* Indicateur de chargement pendant l'attente */}
        </Grid>
      </Grid>
      {isAudioAvailable && (
        <div style={{ marginTop: '10px', textAlign: 'center' }}>
          <audio src={audioURL} controls style={{ width: '100%' }} />
          <p style={{ marginTop: '8px', fontSize: '14px' }}>
            Écouter son entretien
          </p>
        </div>
      )}

      {loading && (
        <CircularProgress
          size={24}
          style={{
            margin: 'auto', // Centre le composant horizontalement et verticalement
            display: 'block', // Assure que le composant occupe toute la largeur disponible
          }}
        />
      )}
      {!loading && resultText && resultText.analysis && (
        <div style={{ marginTop: '10px' }}>
          <h3>Analyse :</h3>
          {formatAnalysisText(resultText.analysis)}
        </div>
      )}
      {/* Condition pour afficher le message d'erreur */}
      {resultText.error === 'Error transcribing audio' && (
        <div style={{ marginTop: '10px', textAlign: 'center', color: 'red' }}>
          Le format audio n'est pas supporté.
        </div>
      )}
    </div>
  );
};

export default Record;
