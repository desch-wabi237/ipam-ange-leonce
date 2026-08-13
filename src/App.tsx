import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Establishments from './pages/Establishments';
import Gallery from './pages/Gallery';
import News from './pages/News';
import Contact from './pages/Contact';
import Registration from './pages/Registration';  // ← AJOUTER CETTE LIGNE

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/etablissements" element={<Establishments />} />
        <Route path="/galerie" element={<Gallery />} />
        <Route path="/actualites" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/inscription" element={<Registration />} />  {/* ← AJOUTER CETTE ROUTE */}
      </Routes>
    </Router>
  );
}

export default App;