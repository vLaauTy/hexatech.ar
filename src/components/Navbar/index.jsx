import React from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
  NavIcon,
  NavText,
} from "./NavbarElements";


const Navbar = ({ toggle }) => {
 

  return (
    <>
      <IconContext.Provider value={{ color: "#324093" }}>
        <Nav >
          <NavbarContainer>
            <NavLogo to="/" >
              <NavIcon src="./assets/logo.png" />
              <NavText>Hexa Technology</NavText>
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem >
                <NavLinks
                  to="home"
                  hover
                  
                >
                  Inicio
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="nosotros"
                  
                >
                  Nosotros
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="productos"
                  
                >
                  Productos
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="contacto"
                  
                >
                  Contacto
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
