import { useState, useRef } from 'react';
import { startRecording, stopRecording } from '../services/record.js';

const Record = () => {
  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState('');
  const mediaRecorder = useRef(null);
  const audioChunks = useRef([]);

  const handleStartRecording = () => {
    startRecording(setRecording, setAudioURL, mediaRecorder, audioChunks);
  };

  const handleStopRecording = () => {
    stopRecording(setRecording, mediaRecorder);
  };

  return (
    <div>
      <button onClick={recording ? handleStopRecording : handleStartRecording}>
        {recording ? 'Stop Recording' : 'Start Recording'}
      </button>
      <audio src={audioURL} controls />
    </div>
  );
};

export default Record;
