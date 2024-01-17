import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TicTacToe from "./components/Morpion/TicTacToe";
import Accueil from './components/Accueil/accueilMain';
import Snake from "./components/Snake/snakeMain";
import NavBar from './components/Utils/navBar'
function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/morpion" element={<TicTacToe />} />
          <Route path="/snake" element={<Snake />} />
          {/* Autres routes de jeux ici */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
