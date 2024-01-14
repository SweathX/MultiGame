import React from 'react';
import { Link } from 'react-router-dom';

function Accueil() {
    return (
        <div>
            <h1>Bienvenue sur notre plateforme de jeux</h1>
            <Link to="/morpion">Jouer au Morpion</Link>
            {/* Autres jeux ici */}
        </div>
    );
}

export default Accueil;
