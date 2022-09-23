import { motion } from "framer-motion";
import styled from "styled-components";

export const AboutMe = styled.div`
  background: var(--BlueColor200);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  overflow: hidden;

  z-index:1;
    width:100%;
    margin-right:auto;
    margin-left:auto;
    padding-right:50px;
    padding-left:50px;

    @media screen and(max-width:991px) {
        padding-right:30px;
    padding-left:30px;
    }
`;

export const AboutH1 = styled.h1`
 
  padding: 10px 0;
  font-size: 4rem;
  color:var(--BlueColor);
  font-weight:400;
`;

export const AboutMeContent = styled.div`
  z-index: 3;
  max-width: 1800px;
  position: absolute;
  padding: 8px 40px;
  display: flex;
  align-items: center;
  justify-content:center;
  justify-self:center;
  width: 100%;
  height: 100%;
`;

export const AboutDesc = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  height:80%;
  overflow: hidden;
  margin-bottom:50px;
`;

export const AboutText = styled.p`
  width: 70%;
  font-size: 30px;
  font-style:normal;
  line-height: 30px;
  font-weight:300;
  color:#575757;
  text-align:center;
  letter-spacing:0;
`;

export const AboutDescContent = styled.div`
  width: 90%;
  height:80%;
  overflow: hidden;
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
`;

export const AboutImgContent=styled.div`
background: var(--BlueColor);
width:50%;
height:80%;
display:flex;
justify-content:flex-start;
`;