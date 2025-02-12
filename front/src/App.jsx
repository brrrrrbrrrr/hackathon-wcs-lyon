import './App.css';
import { Outlet, useLocation } from 'react-router-dom';
// import Header from '../src/components/Header/Header.jsx';
import Footer from '../src/components/Footer/Footer.jsx';
import BurgerMenu from './components/BurgerMenu/BurgerMenu.jsx';

function App() {
  const location = useLocation();
 
  const hideFooter = ['/quizz'].includes(location.pathname) === true;

  return (
    <>
      <main>
        <BurgerMenu />
        <Outlet />
      </main>
      {hideFooter === false && <Footer />}
    </>
  );
}

export default App;
