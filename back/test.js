import speech from '@google-cloud/speech'; // Import the Google Cloud Speech library.

import fs from 'fs';

process.env.GOOGLE_APPLICATION_CREDENTIALS = 'speechtotextgoogle.json'; // Set the path to your Google Cloud service account key.

async function transcribeAudio(audioName) {
  try {
    // Initialize a SpeechClient from the Google Cloud Speech library.
    const speechClient = new speech.SpeechClient();

    // Read the binary audio data from the specified file.
    const file = fs.readFileSync(audioName);
    const audioBytes = file.toString('base64');

    // Create an 'audio' object with the audio content in base64 format.
    const audio = {
      content: audioBytes,
    };

    // Define the configuration for audio encoding, sample rate, and language code.
    const config = {
      encoding: 'OGG_OPUS', // Audio encoding (change if needed).
      sampleRateHertz: 48000, // Audio sample rate in Hertz (change if needed).
      languageCode: 'fr-FR', // Language code for the audio (change if needed).
    };

    // Return a Promise for the transcription result.
    return new Promise((resolve, reject) => {
      // Use the SpeechClient to recognize the audio with the specified config.
      speechClient
        .recognize({ audio, config })
        .then((data) => {
          resolve(data); // Resolve the Promise with the transcription result.
        })
        .catch((err) => {
          reject(err); // Reject the Promise if an error occurs.
        });
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

(async () => {
  // Call the transcribeAudio function to transcribe 'output.mp3'.
  const text = await transcribeAudio('test.wav');

  // Log the entire response object (for debugging purposes).
  console.log(text);

  // Extract and log the transcribed text from the response.
  console.log(
    text[0].results.map((r) => r.alternatives[0].transcript).join('\n')
  );
})();
