const postQuestion = (question, setResponse) => {
  console.log('question :', JSON.stringify(question));
  fetch(`${import.meta.env.VITE_BACKEND_URL}/api/open-ai/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ question }),
  })
    .then((res) => {
      console.log('res : ', res);
      return res.json();
    })
    .then((result) => {
      console.log('result :', result);
      setResponse(result);
    })
    .catch((err) => console.error(err));
};

export default postQuestion;
