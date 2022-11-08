import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function NavigationBar() {
  const { t, i18n } = useTranslation();

// const changeLangEst = () => {
//     i18n.changeLanguage("est");
//     localStorage.setItem("language", "est");
// }

// const changeLangEng = () => {
//     i18n.changeLanguage("eng");
//     localStorage.setItem("language", "eng");
// }

const changeLang = (newLang) => {
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
}

 return (
  <nav class="navbariTest">    
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand as={Link} to="/">EbayShop</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/admin">{t('admin')}</Nav.Link>
        <Nav.Link as={Link} to="/shops">{t('shops')}</Nav.Link>
        <Nav.Link as={Link} to="/cart">{t('cart')}</Nav.Link>
      </Nav>
      
      <img className="lang" onClick={() => changeLang ("est")}src={require("../images/EST.png")} alt= "" />
      <img className="lang" onClick={() => changeLang ("eng")}src={require("../images/UK.png")} alt= "" />
      <img className="lang" onClick={() => changeLang ("chi")}src={require("../images/CHI.png")} alt= "" />
      <img className="lang" onClick={() => changeLang ("den")}src={require("../images/DEN.png")} alt= "" />
    </Container>
  </Navbar>
  </nav>
  );
}

export default NavigationBar;