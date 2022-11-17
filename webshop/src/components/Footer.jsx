import { Link } from "react-router-dom";

function Footer() {
    return (<div className="footer">
        <Link to="/contact"> 
            <div>Võta ühendust</div>
        </Link>
    </div>);
}

export default Footer;