import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import { FaMagento } from 'react-icons/fa'

export const Nav = styled.nav`
  background: ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')};
  height: 140px;
  margin-top: -140px;
  display:flex;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top:0;
  z-index:10;
  width:100%;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1700px;
`
export const NavLogo = styled(LinkR) `
  color:#fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  width:50%;
`
export const MobileIcon = styled.div`
  display: none;
  
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`
export const NavMenu = styled.ul`
  display:flex;
  justify-content: flex-end;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  width:50%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavItem = styled.li`
  height: 80px;

`
export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 0.2rem;
  height: 100%;
  cursor: pointer;
  margin:0 4rem;

  &.active {
    border-bottom: 3px solid #01bf71
  }
`
export const NavIcon = styled(FaMagento) `
    margin-right:1rem;
    font-size:3rem;
`;

export const NavText=styled.span`
  width:5%;
`;