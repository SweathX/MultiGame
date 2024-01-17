import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function navBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary navbar-dark"> {/* Assurez-vous d'utiliser navbar-dark pour un meilleur contraste */}
            <Container>
                <Navbar.Brand href="/" className="text-light">MultiGame</Navbar.Brand> {/* Classe text-light appliquée */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/" className="text-light">Home</Nav.Link> {/* Classe text-light appliquée */}
                        <NavDropdown title="Game" id="basic-nav-dropdown" className="text-light"> {/* Classe text-light appliquée */}
                            <NavDropdown.Item href="/Morpion" className="text-dark">Morpion</NavDropdown.Item> {/* Classe text-dark pour les éléments déroulants */}
                            <NavDropdown.Item href="/Snake" className="text-dark">Snake</NavDropdown.Item> {/* Classe text-dark pour les éléments déroulants */}

                            <NavDropdown.Divider />
                            <NavDropdown.Item href="https://www.matheobeaunez.fr/" className="text-dark">A propos de moi</NavDropdown.Item> {/* Classe text-dark pour les éléments déroulants */}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default navBar;
