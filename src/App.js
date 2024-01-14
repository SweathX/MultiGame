import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './components/Accueil/accueilMain';
import Morpion from './components/Morpion/morpionMain';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/morpion" element={<Morpion />} />
          {/* Autres routes de jeux ici */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
