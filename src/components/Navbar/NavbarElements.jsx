import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";


export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#324093" : "transparent")};
  background: var(--BlueColor200);
  height: 108px;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }

  @media screen and (min-width: 1680px) {
    left: none;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0.5rem;
  max-width: 1700px;
`;
export const NavLogo = styled(LinkR)`
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: 400;
  text-decoration: none;
  width: 50%;

  @media screen and (max-width: 480px) {
    width: 10%;
  }
`;
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: block;
    position: absolute;
    top: 0;
    right: 5%;
    transform: translate(-100%, 60%);
    font-size: 2rem;
    cursor: pointer;
    color: #324093;
  }

 
`;
export const NavMenu = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  width: 50%;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 80px;

`;
export const NavLinks = styled(LinkS)`
  display: flex;
  align-items: center;
  padding: 0;
  height: 50%;
  cursor: pointer;
  margin: 0 2.8rem;

  font-family: "Teko", sans-serif;
  font-weight: 300;
  font-size: 1.5rem;
  line-height: 100px;
  transition: all 100ms ease-out;

  border-bottom: ${(props) =>
    props.hover? "3px solid var(--BlueColor)" : ""};
  color: ${(props) =>
    props.hover ? "var(--BlueColor)" : "var(--NavLinkOff)"};

  &:hover {
    border-bottom: 3px solid var(--BlueColor);
    color:var(--BlueColor);
    transition:all 100ms ease-out;
    
  }

  @media screen and (max-width: 1000px) {
    margin: 0 2.5rem;
  }

  @media screen and (max-width: 860px) {
    margin: 0 1.5rem;
  }
`;
export const NavIcon = styled.img`
  margin-right: 1rem;
  font-size: 2.5rem;
  width: 60px;
  height: 60px;

  @media screen and (max-width: 600px) {
    width: 40px;
  height:40px;
  }
`;

export const NavText = styled.span`
  color: var(--BlueColor);
  font-weight: 400;
  font-size: 25px;
  width: 10%;
  font-weight: 400;
  letter-spacing: 1.5px;
  line-height: 25px;

  @media screen and (max-width: 600px) {
    font-size: 18px;
    line-height: 18px;
  }
`;
