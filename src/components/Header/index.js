import React, { useState } from "react";
import { Wrapper, CdnLogo, ButtonMenu, ButtonClose, NavBar } from "./styles";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
// assets
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <Wrapper>
        <Link to="/">
          <CdnLogo src={Logo} alt="Logo ONG ACEF" />
        </Link>
        <NavBar className={menuIsOpen ? "menuOpened" : ""}>
          <ul>
            <li>
              <Link to="/quemsomos" onClick={() => setMenuIsOpen(false)}>
                Quem somos
              </Link>
            </li>
            <li>
              <Link to="/doe" onClick={() => setMenuIsOpen(false)}>
                Quero doar
              </Link>
            </li>
            <li>
              <Link to="/contato" onClick={() => setMenuIsOpen(false)}>
                Seja um voluntário
              </Link>
            </li>
            <li>
              <Link to="/sejavoluntario" onClick={() => setMenuIsOpen(false)}>
                Contato
              </Link>
            </li>
          </ul>
          <ButtonClose onClick={toggleMenu}>
            <CloseIcon />
          </ButtonClose>
        </NavBar>
        <ButtonMenu onClick={toggleMenu}>
          <MenuIcon />
        </ButtonMenu>
      </Wrapper>
    </>
  );
};

export default Header;
