import styled from "styled-components";
import { motion } from "framer-motion";
import { Link as LinkS } from "react-scroll";

export const HeroContainer = styled.div`
  height: 100vh;
  z-index: 1;
  background: var(--BlueColor200);
  width:100%;
  position:relative;

  :before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    z-index: 2;
  }

  @media screen and (max-width: 1024px) {
    height: 150vh;
  }

  

  @media screen and (max-width: 600px) {
    height: 135vh;
  }

  @media screen and (max-width: 480px) {
    height: 110vh;
  }

  @media screen and (max-width: 400px) {
    height: 90vh;
  }

  @media screen and (max-height: 800px) {
    height: 100vh;
  }


  @media screen and (max-height: 700px) {
    
  }


  @media (max-width: 1050px) and (max-height: 800px) {
    height: 130vh;
  }


  @media (max-width: 1024px) and (max-height: 800px) {
    height: 170vh;
  }

  
  @media (max-width: 480px) and (max-height: 800px) {
    height: 125vh;
  }

  @media (max-width: 400px) and (max-height: 860px) {
    height: 100vh;
  }

  @media (max-width: 400px) and (max-height: 750px) {
    height: 110vh;
  }

  
`;

export const HeroContent = styled.div`
  z-index: 3;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 828px;
  width: 100%;
  max-width:1680px;
  background: var(--BlueColor200);

  @media screen and (max-width: 1024px) {
    height: 150vh;
  }

  @media (max-width: 480px) and (max-height: 1050px) {
    height: 100vh;
  }

  @media (max-width: 480px) and (min-height: 1050px) {
    height: 100vh;
  }
`;

export const HeroText = styled.div`
  position: absolute;
  width: 656px;
  height: 600px;
  top:15rem;
  margin-left: 10rem;

  @media screen and (max-width: 1440px) {
    margin-left: 6rem       ;
  }

  @media screen and (max-width: 1280px) {
    margin-left: 3rem;
  }

  @media screen and (max-width: 1024px) {
    top: 20%;
  }

  @media screen and (max-width: 600px) {
    width: auto;
    height: auto;
  }

  @media screen and (max-width: 320px) {
    margin-left: 30px;
  }
`;

export const HeroTextWrapper = styled.div``;

export const Image = styled.img`
  position: absolute;
  top: 2%;
  left: 1067px;
  border: 0;

  vertical-align: middle;
  display: inline-block;
  width: 416px;
  max-width: 416px;
  height: 583px;
  max-height:583px;
top: 0;
left: 900px;
right: 0;
bottom: 0;
margin: auto;

  @media screen and (min-width: 1700px) {
    top: 3%;
    left: 1050px;
    width: 436px;
    height: 603px;
  }

  @media (min-width: 1700px) and (max-height:1050px) {
    top: 0;
    left: 870px;
    width: 486px;
    height: 643px;
  }

  @media (min-width: 1700px) and (min-height:1050px) {
    position: absolute;
top: 0;
left: 900px;
right: 0;
bottom: 0;
margin: auto;
  }

  @media (min-width: 1700px) and (max-height:920px) {
    top: 6%;
    left: 850px;
    width: 486px;
    height: 643px;
  }

  @media  (min-width: 1700px) and (max-height:860px) {
    top: 0;
    width: 506px;
    height: 673px;
  }

  @media  (min-width: 1700px) and (max-height:800px) {
    top: -7%;
    width: 506px;
    height: 673px;
  }
  
  @media  (min-width: 1700px) and (max-height:700px) {
    top: -7%;
    width: 506px;
    height: 673px;
  }

  

  @media screen and (max-width: 1600px) {
    
  }

  @media screen and (max-width: 1440px) {
    left: 800px;
  }

  @media screen and (max-width: 1380px) {
    left: 770px;
  }

  @media screen and (max-width: 1280px) {
    left: 670px;
  }
  @media screen and (max-width: 1190px) {
 
    width: 380px;
    height: 531px;
    
  }

  @media screen and (max-width: 1100px) {
 
 width: 380px;
 height: 531px;
 left: 550px;
}

  @media screen and (max-width: 1050px) {
    left: 620px;
    width: 380px;
    height: 531px;
    top: 7%;
  }

  @media screen and (max-width: 1040px) {
    width: 380px;
    height: 531px;
  }

  @media screen and (max-width: 1024px) {
    width: 450px;
    height: 629px;
    top: 0%;
    left: 25%;
  }

  @media screen and (max-width: 720px) {
    width: 450px;
    height: 600px;
    top: 0%;
    left: 20%;
  }

  @media screen and (max-width: 600px) {
    width: 325px;
    height: 485px;
    top: 0%;
    left: 18%;
  }

  @media screen and (max-width: 480px) {
    width: 275px;
    height: 385px;
    top: 0%;
    left: 17%;
  }

  @media screen and (max-width: 440px) {
    width: 230px;
    height: 345px;
  }

  @media screen and (max-width: 400px) {
    width: 220px;
    height: 316px;
    top: 0%;
  }

  @media screen and (max-width: 360px) {
    width: 200px;
    height: 300px;
  }
`;

export const HeroH1 = styled(motion.h1)`
  color: var(--BlueColor);
  font-size: 6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 100px;
  letter-spacing: 0.04em;
  cursor: pointer;
  z-index: 9999;

  @media screen and (max-width: 1360px) {
    font-size: 100px;
    letter-spacing: 0.01rem;
    line-height: 80px;
  }

  @media screen and (max-width: 1200px) {
    letter-spacing: 0.02rem;
    line-height: 90px;
    font-size: 90px;
  }

  @media screen and (max-width: 1040px) {
    font-size: 85px;
    letter-spacing: 0;
    line-height: 80px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 5rem;
    line-height: 4rem;
    letter-spacing: 0.04em;
  }

  @media screen and (max-width: 700px) {
    font-size: 100px;
    line-height: 80px;
    letter-spacing: 0.04em;
  }

  @media screen and (max-width: 600px) {
    font-size: 90px;
    line-height: 70px;
  }

  @media screen and (max-width: 530px) {
    font-size: 80px;
    line-height: 70px;
    letter-spacing: 0;
  }
  @media screen and (max-width: 480px) {
    font-size: 60px;
    line-height: 60px;
    letter-spacing: 0;
  }

  @media screen and (max-width: 320px) {
    font-size: 50px;
    line-height: 40px;
    letter-spacing: 0;
  }
`;

export const HeroP = styled(motion.p)`
  color: var(--BlueColor);
  margin-bottom: 15px;
  font-style: normal;
  font-weight: 300;
  font-size: 60px;
  line-height: 48px;

  @media screen and (max-width: 1550px) {
    font-size: 50px;
  }

  @media screen and (max-width: 1200px) {
    font-size: 50px;
  }

  @media screen and (max-width: 1040px) {
    font-size: 40px;
    letter-spacing: 0;
    line-height: 80px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 60px;
    line-height: 48px;
  }

  @media screen and (max-width: 768px) {
    font-size: 35px;
  }
  @media screen and (max-width: 480px) {
    font-size: 30px;
    margin-bottom: 0;
  }

  @media screen and (max-width: 320px) {
    font-size: 25px;
    margin-bottom: 0;
  }
`;

export const HeroImage = styled.div`
  height: 583px;
  width: 100%;
  margin-top: 0px;
  position: absolute;
  max-width:1680px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  filter: drop-shadow(0px 0px 0px rgba(50, 64, 147, 0.1))
    drop-shadow(-8px 9px 26px rgba(50, 64, 147, 0.1))
    drop-shadow(-32px 35px 47px rgba(50, 64, 147, 0.09))
    drop-shadow(-73px 78px 64px rgba(50, 64, 147, 0.05))
    drop-shadow(-130px 138px 76px rgba(50, 64, 147, 0.01))
    drop-shadow(-203px 216px 83px rgba(50, 64, 147, 0));

  @media screen and (min-width: 1700px) {
    height: 70%;
    margin-top: 200px;
  }

  @media  (min-width: 1700px) and (min-height:700px) {
    
    margin-top: 40px;
  }
  @media screen and (max-width: 1024px) {
    position: absolute;
    top: 45%;
  }

  @media screen and (max-width: 600px) {
    position: absolute;
    top: 43%;
  }

  @media screen and (max-width: 480px) {
    position: absolute;
    top: 40%;
  }


`;

export const HeroWrapper = styled.div`
  background: #fff;
  width: 870px;
  height: 583px;
  clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 4% 50%);
  max-width:1680px;
  max-height:583px;
  @media screen and (min-width: 1700px) {
    width: 58%;
    height: 100%;
  }

  @media  (min-width: 1700px) and (max-height:700px) {
    width: 58%;
    height: 140%;
  }

  @media  (min-width: 1700px) and (min-height:700px) {
    width: 58%;
    height: 120%;
  }


  @media screen and (max-width: 1550px) {
    width: 780px;
  }

  @media screen and (max-width: 1440px) {
    width: 740px;
  }

  @media screen and (max-width: 1190px) {
    width: 660px;
    height: 90%;
  }

  @media screen and (max-width: 1080px) {
    width: 610px;
    height: 90%;
  }
  @media screen and (max-width: 1024px) {
    position: absolute;

    width: 870px;
    height: 583px;
  }

  @media screen and (max-width: 720px) {
    width: 700px;
  }

  @media screen and (max-width: 600px) {
    width: 580px;
    height: 480px;
  }

  @media screen and (max-width: 480px) {
    width: 460px;
    height: 400px;
  }

  @media screen and (max-width: 440px) {
    width: 400px;
    height: 340px;
  }

  @media screen and (max-width: 400px) {
    width: 380px;
    height: 320px;
  }

  @media screen and (max-width: 360px) {
    width: 330px;
    height: 290px;
  }
`;

export const Form = styled(motion.div)`
  position: absolute;
  background: var(--BlueColor);
  width: 225px;
  height: 162.05px;
  z-index: -1;

  @media screen and (min-width: 1700px) {
    width: 275px;
    height: 190px;
  }

  @media  (min-width: 1700px) and (min-height:700px) {
    width: 225px;
  height: 162.05px;
  }

  @media screen and (max-width: 1600px) {
    width: 200px;
  height: 140.05px;
  }
  @media screen and (max-width: 1440px) {
    width: 175px;
    height: 140px;
  }

  @media screen and (max-width: 1200px) {
    width: 125px;
    height: 100px;
  }

  @media screen and (max-width: 810px) {
    width: 125px;
    height: 100px;
  }

  @media screen and (max-width: 1040px) {
    width: 175px;
    height: 150px;
  }

  @media screen and (max-width: 720px) {
    width: 135px;
    height: 120px;
  }

  @media screen and (max-width: 680px) {
    width: 110px;
    height: 120px;
  }

  @media screen and (max-width: 630px) {
    width: 120px;
    height: 100px;
  }

  @media screen and (max-width: 480px) {
    width: 90px;
    height: 70px;
  }

  @media screen and (max-width: 400px) {
    width: 70px;
    height: 50px;
  }

  @media screen and (max-width: 320px) {
    width: 70px;
    height: 50px;
  }
`;

export const Form1 = styled(Form)`
  clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);
  left: 1000px;
  bottom: 50px;
  box-sizing: border-box;
  position: absolute;
margin: auto;

  @media screen and (min-width: 1700px) {
    left: 950px;
    bottom: 100px;
  }
  @media (min-width: 1700px) and (max-height:1050px) {
    left: 940px;
    bottom:160px;
  }
  
  @media (min-width: 1700px) and (min-height:1050px) {
    left: 960px;
    bottom: 20%;
  }

  @media (min-width: 1700px) and (max-height:920px) {
    left: 910px;
    bottom: 100px;
  }

  @media  (min-width: 1700px) and (max-height:860px) {
    left: 950px;
    bottom: 110px;
  }

  @media  (min-width: 1700px) and (max-height:700px) {
    left: 920px;
    bottom: 40px;
  }

  /* @media  (min-width: 1700px) and (min-height:700px) {
    left: 920px;
    bottom: 40px;
  } */

  @media screen and (max-width: 1600px) {
    left: 940px;
  }

  @media screen and (max-width: 1440px) {
    left: 860px;
  }

  @media screen and (max-width: 1380px) {
    left: 810px;
  }

  @media screen and (max-width: 1280px) {
    left: 700px;
  }

  @media screen and (max-width: 1190px) {
    
    bottom:80px;
  }

  @media screen and (max-width: 1100px) {
    left: 600px;
  }
  @media screen and (max-width: 1050px) {
    left: 600px;
  }

  @media screen and (max-width: 1024px) {
    bottom: 100px;
    left: 25%;
  }

  @media screen and (max-width: 810px) {
    bottom: 80px;
    
  }

  @media screen and (max-width: 400px) {
    bottom: 50px;
    left: 23%;
  }
`;

export const Form2 = styled(Form)`
  clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
  right: 8%;
  top: 80px;


  @media screen and (min-width: 1700px) {
    right: 6%;
  top: 80px;
  }

  @media  (min-width: 1700px) and (max-height:700px) {
    right: 4%;
  top: 30px;
  }
  @media (min-width: 1700px) and (max-height:1050px) {
    right: 4%;
  top: 150px;
  }
  @media (min-width: 1700px) and (min-height:1050px) {
    right: 4%;
  top: 150px;
  }

  @media  (min-width: 1700px) and (max-height:860px) {
    right: 8%;
  top: 100px;
  }

  @media  (min-width: 1700px) and (max-height:700px) {
    right: 6%;
  top: 60px;
  }

 

  @media screen and (max-width: 1600px) {
    right: 4%;
  }
  @media screen and (max-width: 1440px) {
    top: 120px;
    
  }

  @media screen and (max-width: 1200px) {
    top: 120px;
    right: 3%;
  }

  @media screen and (max-width: 1024px) {
    right: 2.5%;
    top: 100px;
  }

  @media screen and (max-width: 810px) {
    right: 5%;
    top: 100px;
  }

  @media screen and (max-width: 680px) {
    right: 8%;
    top: 45px;
  }

  @media screen and (max-width: 480px) {
    right: 7%;
    top: 35px;
  }
`;

export const ButtonHexa = styled(LinkS)`
  background: var(--OrangeColor);

  width: 22.5rem;
  height: 72px;
 margin-left:10rem;
 margin-top:20rem; 
 text-align:center;
  padding: 16px 24px;
  border: none;
  border-radius: 10px;
  gap: 10px;
  font-weight: 400;
  font-size: 40px;
  font-style: normal;
  line-height: 40px;
  letter-spacing: 0.02em;
  color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  outline:none;
  pointer-events:all;
  cursor: pointer;
  outline:none;
  z-index:99;

  &:hover {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
      #fc6a05;
  }

  @media screen and (max-width: 1440px) {
    margin-left: 6rem;
    
  }

  @media screen and (max-width: 1240px) {
    margin-left: 3rem;
    
  }
 
  

  @media screen and (max-width: 1024px) {
    
    
    margin-bottom:40rem; 
  }

  @media screen and (max-width: 700px) {
    margin-left: 55px;
    
  }

  @media (max-width: 1024px) and (max-height: 860px) {
    margin-bottom:32rem; 
  }

  
  @media (max-width: 1024px) and (max-height: 760px) {
    margin-bottom:26rem; 
  }

  @media screen and (max-width: 600px) {
    margin-left: 55px;
    margin-bottom:50rem; 
    font-size: 25px;
    width: 15rem;
    height: 3rem;
    line-height: 30px;
    letter-spacing: 0.01em;
  }

  @media screen and (max-width: 480px) {
    margin-bottom:60rem; 
    font-size: 30px;
    
    
    
  }

  @media screen and (max-width: 400px) {
    margin-bottom:18rem; 
    font-size: 30px;
    width: 250px;
    height: 60px;
  }

  @media screen and (max-width: 360px) {
    
    font-size: 30px;
    width: 230px;
    height: 60px;
  }

 

  @media (max-width: 600px) and (max-height: 960px) {
    margin-bottom:40rem;
  }

   @media (max-width: 600px) and (max-height: 960px) {
    margin-bottom:40rem;
  }

  @media (max-width: 480px) and (max-height: 1050px) {
    margin-bottom:30rem ;
  }

 

  @media (max-width: 600px) and (max-height: 800px) {
    margin-top:40rem;
    font-size: 30px;
    width: 230px;
    height: 60px;
  }

  @media (max-width: 480px) and (max-height: 950px) {
    margin-top:25rem;
    font-size: 30px;
    width: 230px;
    height: 60px;
  }

  @media (max-width: 480px) and (max-height: 800px) {
    margin-top:33rem;
    font-size: 30px;
    width: 230px;
    height: 60px;
  }

  @media (max-width: 400px) and (min-height: 800px) {
    margin-top:13rem;
    font-size: 30px;
    width: 230px;
    height: 60px;
  } 

  @media (max-width: 480px) and (min-height: 1050px) {
    margin-bottom:28rem;
    font-size: 30px;
    width: 230px;
    height: 60px;
  } 


 
`;
