import { useState, useRef } from 'react';
import { startRecording, stopRecording } from '../services/record.js';

const Record = () => {
  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState('');
  const [resultText, setResultText] = useState();
  const mediaRecorder = useRef(null);
  const audioChunks = useRef([]);
  {
    resultText && console.log('analys :', resultText.analysis);
  }
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
  };

  const formatAnalysisText = (text) => {
    return text.split('\n').map((line, index) => <p key={index}>{line}</p>);
  };

  return (
    <div>
      <button onClick={recording ? handleStopRecording : handleStartRecording}>
        {recording ? 'Stop Recording' : 'Start Recording'}
      </button>
      <audio src={audioURL} controls />
      {resultText && (
        <div>
          <h3>Analyse :</h3>
          {formatAnalysisText(resultText.analysis)}
        </div>
      )}
    </div>
  );
};

export default Record;
