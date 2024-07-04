const startRecording = (
  setRecording,
  setAudioURL,
  mediaRecorder,
  audioChunks
) => {
  navigator.mediaDevices
    .getUserMedia({ audio: true })
    .then((stream) => {
      mediaRecorder.current = new MediaRecorder(stream);
      mediaRecorder.current.start();

      mediaRecorder.current.ondataavailable = (event) => {
        audioChunks.current.push(event.data);
      };

      mediaRecorder.current.onstop = () => {
        const audioBlob = new Blob(audioChunks.current, { type: 'audio/wav' });
        audioChunks.current = [];
        const audioURL = URL.createObjectURL(audioBlob);
        setAudioURL(audioURL);
        // Envoyer le fichier audio au backend
        const formData = new FormData();
        formData.append('audio', audioBlob, 'audio.wav');
        console.log('form data :', formData);
        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/audio/upload`, {
          method: 'POST',
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.error('Error uploading audio:', error));
      };

      setRecording(true);
    })
    .catch((error) => console.error('Error accessing media devices:', error));
};

const stopRecording = (setRecording, mediaRecorder) => {
  if (mediaRecorder.current) {
    mediaRecorder.current.stop();
    setRecording(false);
  }
};

export { startRecording, stopRecording };
