import React from 'react'
import { dataSocials } from '../../data/dataInfo';
import { 
  Anchor, 
  AnchorSocial, 
  ArrowContainer, 
  ArrowUp, 
  BlueLine, 
  CroppedLogo, 
  FacebookLogo, 
  FooterContainer, 
  FooterEnd, 
  FooterGroup, 
  FooterInnerContainer, 
  FooterLines, 
  FooterSM, 
  Header, HeaderName, 
  InstagramLogo, 
  LogoContainer, 
  OrangeLine, 
  Paragraph, 
  SMContainer, 
  TextContainer } from './FooterElements'


export const Footer = () => {

  console.log(dataSocials[0].LinkFacebook);
  return (
    <>
    <FooterContainer>
        <LogoContainer>
            <img src='./assets/logoWhite.png' alt="" />
             <TextContainer>
            <HeaderName>Hexa</HeaderName>
            <HeaderName>Technology</HeaderName>
             </TextContainer>
        </LogoContainer>
        <Paragraph color={"white"}>
            Nos dedicamos a la venta de equipos de laboratorio, especialmente campanas de extracción de gases, estufos de laboratorio (secado y cultivo) y medición de temperatura a tráves de sensores.
        </Paragraph>
        <TextContainer>
            <Header 
              color={"white"}
              to="nosotros"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}>
                Nosotros  
            </Header>
            <Anchor to='nosotros'>Conocenos</Anchor>
            
        </TextContainer>
        <TextContainer>
            <Header 
              color={"white"}
              to="productos"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}>
                Productos
            </Header>
            <Anchor to="productos">Hexa Tech</Anchor>
            <Anchor to="productos">Hexa Temp</Anchor>
        </TextContainer>
        <TextContainer>
            <Header 
              color={"white"}
              to="contacto"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}>
                Contactanos
            </Header>
            <AnchorSocial href={dataSocials[0].LinkFacebook} target="_blank" rel="noreferrer" >Facebook</AnchorSocial>
            <AnchorSocial href={dataSocials[0].LinkInstagram} target="_blank" rel="noreferrer">Instagram</AnchorSocial>
            <AnchorSocial href={dataSocials[0].LinkTienda} target="_blank" rel="noreferrer">Tienda</AnchorSocial>
        </TextContainer>
    </FooterContainer>
        <FooterInnerContainer>
          <FooterSM>
            <FooterGroup>
            <a href={dataSocials[0].LinkFacebook} target="_blank" rel="noreferrer"><FacebookLogo/></a>
            <a href={dataSocials[0].LinkInstagram} target="_blank" rel="noreferrer"><InstagramLogo/></a>              
            <TextContainer>
              <Paragraph color='var(--BlueColor)'>
                Calidad y duración garantizados. 
              </Paragraph>
              <Paragraph color='var(--BlueColor)'>
                © HexaTechnology Innovation 2022. Todos los derechos reservados
              </Paragraph>
            </TextContainer>
            </FooterGroup>
            <ArrowContainer
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}>
              <ArrowUp/>
            </ArrowContainer>
          </FooterSM>
          <FooterEnd>
            <FooterLines>
              <OrangeLine></OrangeLine>
              <BlueLine> <br/> </BlueLine>
            </FooterLines>
            <CroppedLogo src='./assets/CroppedLogo.png' alt=""/>
          </FooterEnd>
        </FooterInnerContainer>
        </>
  )
}
