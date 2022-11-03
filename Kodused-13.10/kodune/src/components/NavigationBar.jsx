import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTranslation } from 'react-i18next';

function NavigationBar() {
  const { t, i18n } = useTranslation();

  const changeLang = (newLang) => {
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
}

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">{t("Avaleht")}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Kontakt">Kontakt</Nav.Link>
            <Nav.Link href="/Meist">Meist</Nav.Link>
            <Nav.Link href="/Seaded">Seaded</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <img className="lang" onClick={() => changeLang ("ee")}src={require("../images/EST.png")} alt= "" />
          <img className="lang" onClick={() => changeLang ("eng")}src={require("../images/UK.png")} alt= "" />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;