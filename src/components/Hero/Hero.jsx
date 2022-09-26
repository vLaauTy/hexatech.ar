import React from "react";
import {
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  HeroText,
  HeroImage,
  Image,
  HeroTextWrapper,
  HeroWrapper,
  Form2,
  Form1,
  ButtonHexa,
} from "./HeroElements";


const Hero = () => {


  const variants = {
    initial  : {x: 100, opacity: 0},
    whileInView:{x:0, opacity:1, transition:{duration:1}},
    initial2: {x: -100, opacity: 0},
    initialText: {y:-100, opacity:0},
    whileInViewText:{y:0, opacity:1, transition:{duration:1}},
    initialText2: {y:100, opacity:0}
  } 

  return (
    <HeroContainer id="home">
   
      <HeroContent id='c'>
        <HeroText>
          <HeroTextWrapper>
            <HeroP variants={variants} initial="initialText" whileInView="whileInViewText" viewport="viewport">Brindamos productos de </HeroP>
            <HeroH1 variants={variants} initial="initialText2" whileInView="whileInViewText" viewport="viewport"> CALIDAD Y DURABILIDAD</HeroH1>
            
          </HeroTextWrapper>
        </HeroText>
        
        <HeroImage id='i'>
          <HeroWrapper id='e'>
            <Image src='./assets/Rectangle 5.png'></Image>
            <Form1 variants={variants} initial="initial" whileInView="whileInView" viewport="viewport"></Form1>
            <Form2 variants={variants} initial="initial2" whileInView="whileInView" viewport="viewport"></Form2>
            
            </HeroWrapper>
            
        </HeroImage>
        <ButtonHexa to='contacto'>CONTÁCTANOS</ButtonHexa>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
