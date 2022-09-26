import styled from "styled-components";
import { Link  } from 'react-scroll'
import {IoLogoFacebook} from 'react-icons/io'
import {FaInstagramSquare} from 'react-icons/fa'
import {BsArrowUpCircleFill} from 'react-icons/bs'



export const FooterContainer = styled.div`
  padding: 0;
  display: flex;
  flex-direction:row;
  justify-content: space-between;
  padding: 2% 15% 2% 9%;
  width: 100%;
  height: 45%;
  color: white;
  background-color: var(--BlueColor);
`;

export const TextContainer = styled.div`
  cursor: pointer;
  padding: 0;
  display: flex;
  color: white;
  flex-direction: column;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  align-items: center
`;

export const HeaderName = styled.h1`
  color: white;
  font-style: normal;
  font-size: 25px;
  font-weight: 200;
  margin: -8% 10%

`;

export const Header = styled(Link)`
  cursor: pointer;
  color: ${(props) => props.color};
  font-style: normal;
  font-size: 25px;
  font-weight: 400;
  line-height: ${(props) => props.color === "white" ? "80px" : ""} ;
  opacity: ${(props) => props.color === "white" ? "100%" : "60%"};
  ${(props) => props.color === "white" ? 
  "@media screen and (orientation: portrait){ display: none;}" : ""}
`

export const Paragraph = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 400;
  color: ${(props) => props.color};
  font-style: normal;
  font-size: 19px;
  max-width: ${(props) => props.color === "white" ? "26%" : "none"};
  opacity: ${(props) => props.color === "white" ? "100%" : "60%"};
  ${(props) => props.color === "white" ? 
  "@media screen and (orientation: portrait){ display: none;}" : ""}
`

export const Anchor = styled(Link)`
  color: white;
  font-style: normal;
  font-size: 17px;
  text-decoration: none;
  @media screen and (orientation: portrait){ display: none;}
`;

export const AnchorSocial= styled.a`
color: white;
  font-style: normal;
  font-size: 17px;
  text-decoration: none;
  @media screen and (orientation: portrait){ display: none;}
`;

export const FooterInnerContainer = styled.div`
  display: block;
  background-color: white;
  width: 100%;
  height: 25%;
`

export const BlueLine = styled.div`
  display: block;
  background-color: var(--BlueColor);
  width: 97.8%;
  height: 25px;
`

export const OrangeLine = styled.div`
  display: block;
  background-color: var(--OrangeColor);
  width: 97.8%;
  height: 7px;
  margin: 2px 0px
`

export const CroppedLogo = styled.img`
  position: absolute;
  bottom: 10;
  right: 0;
  height: 67px
`

export const FooterEnd = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 25%;
`

export const FooterLines = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 25%;
`

export const FacebookLogo = styled(IoLogoFacebook)`
  display: flex;
  flex-direction: column;
  color: var(--BlueColor);
  opacity: 60%;
  width: 50px;
  height: 50px;
  margin: 10px;
`

export const InstagramLogo = styled(FaInstagramSquare)`
  display: flex;
  flex-direction: column;
  opacity: 60%;
  color: var(--BlueColor);
  width: 43px;
  height: 43px;
  margin: 10px;
`

export const FooterSM = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 5% ;
  justify-content: space-between;
  `
  
  export const FooterGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  `
  
  export const ArrowUp = styled(BsArrowUpCircleFill)`
  display: flex;
  flex-direction: column;
  color: var(--OrangeColor);
  width: 57px;
  height: 57px;
  margin: 10px;
  padding: 4px;
  border-color: var(--OrangeColor);
  border-style: solid;
  border-width: 1px;
  border-radius: 100%;
  `
  
  export const ArrowContainer = styled(Link)`
  cursor: pointer;
`