import React from 'react';
import { Link } from 'react-router-dom';
import tictactoeIcon from '../../assets/tictactoe.png'
import commingsoonIcon from '../../assets/coming-soon.png'

function Accueil() {
    return (
        <div className="container">
            <h1 className="my-4">Bienvenue sur MultiGame</h1>

            {/* Lien vers Morpion utilisant une image */}
            <div className='div-iconMain'>
                <Link to="/morpion">
                    <img className="icon-main" src={tictactoeIcon} alt="Jouer au Morpion" />
                </Link>
                <img className="icon-main" src={commingsoonIcon} alt="Comming soon" />
            </div>
            {/* Autres jeux ici */}
        </div>
    );
}

export default Accueil;