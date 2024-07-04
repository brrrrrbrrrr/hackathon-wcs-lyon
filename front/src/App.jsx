import './App.css';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../src/components/Header/Header.jsx'
import Footer from '../src/components/Footer/Footer.jsx'
import Prompt from './components/Prompt.jsx';
import Questions from './components/Questions.jsx';
import Record from './components/Record.jsx';

function App() {

  const location = useLocation();
  const hideHeaderFooter =
    ["/quizz"].includes(location.pathname) === true;

  return (
    <>
      {hideHeaderFooter === false && <Header />}
      <main>
        <Outlet />
      </main>
      {hideHeaderFooter === false && <Footer />}
      <Prompt />
      <Questions />
      <Record />
    </>
  );
}

export default App;
