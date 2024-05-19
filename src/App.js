import './App.scss';
import Banner from "./components/banners/banner.js";
import Footer from './components/footer/footer.js';
import Presentation from './components/presentation/presentation.js';
import Outils from './components/outils/outils.js';
import Projet from './components/projet/projet.js';

function App() {
  return (
    <>
      <Banner />
      <Presentation />
      <Outils />
      <Projet />
      <Footer />
    </>
  );
}

export default App;
