import React from 'react'
import { 
  Anchor, 
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
            <Anchor href=''>Conocenos</Anchor>
            <Anchor href=''>Misión</Anchor>
            <Anchor href=''>Vision</Anchor>
            <Anchor href=''>Valores</Anchor>
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
            <Anchor href=''>Hexa Tech</Anchor>
            <Anchor href=''>Hexa Temp</Anchor>
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
            <Anchor href=''>Facebook</Anchor>
            <Anchor href=''>Instagram</Anchor>
            <Anchor href=''>Tienda</Anchor>
        </TextContainer>
    </FooterContainer>
        <FooterInnerContainer>
          <FooterSM>
            <FooterGroup>
            <FacebookLogo/>
            <InstagramLogo/>              
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
