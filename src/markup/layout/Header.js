import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../assets/css/main.css";
import logo from "../../assets/images/logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  

  return (
    <header>
      <img src={logo} alt="Logo" />
      <button onClick={toggleMenu} className="nav-btn">
        {menuOpen ? <FaTimes style={{color: 'white'}} /> : <FaBars style={{color: 'white'}} />}
      </button>
      <nav className={` ${menuOpen ? "responsive_nav" : ""}`}>
        <Link to={"/"} onClick={toggleMenu}>
          Home
        </Link>
        <Link to={"/fundraisers"} onClick={toggleMenu}>
          Fundraisers
        </Link>
		<Link to={"#"} onClick={toggleMenu}>
		My Life
	  </Link>
	  <Link to={"#"} onClick={toggleMenu}>
	  Contact
	</Link>

      </nav>
    </header>
  );
}

export default Header;
