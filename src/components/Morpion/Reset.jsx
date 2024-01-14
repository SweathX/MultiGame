import GameState from "./GameState";
import { useNavigate } from 'react-router-dom';
import './morpion.css';

function Reset({ gameState, onReset }) {
  const navigate = useNavigate();

  if (gameState === GameState.inProgress) {
    return;
  }

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <div className="div-style">
      <button onClick={onReset} className="reset-button">
        Play Again
      </button>
      <button onClick={handleHomeClick} className="reset-button">
        Accueil
      </button>
    </div>
  );
}

export default Reset;