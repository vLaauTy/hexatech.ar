import React from "react";
import {
  AboutDesc,
  AboutDescContent,
  AboutH1,
  AboutMe,
  AboutMeContent,
  AboutText,
  AboutImgContent,
  AboutImg,
} from "./Nosotros.elements";

const Nosotros = () => {
  return (
    <AboutMe id="nosotros">
      <AboutMeContent>
        <AboutImgContent>
          <AboutImg src="./assets/bateria2.png"></AboutImg>
          
        </AboutImgContent>
        <AboutDesc>
          <AboutDescContent>
            <AboutH1>Nosotros</AboutH1>
            <AboutText>
              Nos dedicamos a la venta de equipos de laboratorio, especialmente
              campanas de extracción de gases, estufos de laboratorio (secado y
              cultivo) y medición de temperatura a tráves de sensores.
            </AboutText>
          </AboutDescContent>
        </AboutDesc>
      </AboutMeContent>
    </AboutMe>
  );
};

export default Nosotros;
