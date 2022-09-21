import styled from "styled-components";
import { motion } from "framer-motion";
import { Link as LinkS } from 'react-scroll'

export const HeroContainer = styled.div`
height: 100vh;
  z-index: 1;
  
  background: var(--BlueColor200);

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

  @media screen and (max-height:800px) {
 
 height:110vh;
}
`;

export const HeroContent = styled.div`
  z-index: 3;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 828px;
  width:100%;
`;

export const HeroText = styled.div`
position:absolute;
  width: 656px;
  height:200px;
  
  margin-left:165px;

  

  @media screen and (max-width: 1440px) {
    margin-left:95px;
  }

  @media screen and (max-width: 1280px) {
    margin-left:55px;
  }

  @media screen and (max-width: 1024px) {
    
    top:20%;
  }

  @media screen and (max-width: 600px) {
    
    width: auto;
  height:auto;
  }

  

  @media screen and (max-width: 320px) {
    margin-left: 30px;
  }
`;

export const HeroTextWrapper = styled.div`
 
`;

export const Image = styled.img`
  position: absolute;
  top: 2%;
  left: 1067px;
  border: 0;
  
  vertical-align: middle;
  display: inline-block;
  width: 416px;
height: 583px;

@media screen and (min-width: 1700px) {
  top: 6%;
  left: 1200px;
  width: 436px;
height: 603px;
  
  }

  @media screen and (max-width: 1600px) {
    left: 1000px;
  }

  @media screen and (max-width: 1440px) {
    left: 920px;
  }

  @media screen and (max-width: 1280px) {
    left:770px;
  }
  @media screen and (max-width: 1190px) {
    left:730px;
    width: 380px;
    height: 531px;
    top: 7%;
  }

  @media screen and (max-width: 1050px) {
    left:620px;
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
    left: 35%;
  }

  @media screen and (max-width: 720px) {
    width: 450px;
    height: 600px;
    top: 0%;
    left: 28%;
  }



  @media screen and (max-width: 600px) {
    width: 325px;
    height: 485px;
    top: 0%;
    left: 30%;
  }

  

  @media screen and (max-width: 480px) {
    width: 275px;
    height: 385px;
    top: 0%;
    left: 30%;
  }

  @media screen and (max-width: 440px) {
    width:230px;
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

export const HeroH1 = styled.h1`
  color: var(--BlueColor);
  font-size: 120px;
  font-style: normal;
  font-weight: 500;
  line-height: 100px;
  letter-spacing: 0.04em;

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
    font-size: 120px;
    line-height: 100px;
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

export const HeroP = styled.p`
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
  height:583px;
  width: 100%;
margin-top:100px;
  position:absolute;

display:flex;
align-items:center;
justify-content:flex-end;
  filter: drop-shadow(0px 0px 0px rgba(50, 64, 147, 0.1))
    drop-shadow(-8px 9px 26px rgba(50, 64, 147, 0.1))
    drop-shadow(-32px 35px 47px rgba(50, 64, 147, 0.09))
    drop-shadow(-73px 78px 64px rgba(50, 64, 147, 0.05))
    drop-shadow(-130px 138px 76px rgba(50, 64, 147, 0.01))
    drop-shadow(-203px 216px 83px rgba(50, 64, 147, 0));


    @media screen and (min-width: 1700px) {
      height:70%;
      margin-top:200px;
  
  }
    @media screen and (max-width: 1024px) {
      position:absolute;
      top:60%;
  
  }

  @media screen and (max-width: 600px) {
      position:absolute;
      top:48%;
  
  }

  @media screen and (max-width: 480px) {
      position:absolute;
      top:30%;
  
  }

  @media screen and (max-width: 400px) {
      position:absolute;
      top:25%;
  
  }

`;

export const HeroWrapper = styled.div`

  background: #fff;
  width:870px;
  height: 583px;
  clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 4% 50%);


  @media screen and (min-width: 1700px) {
    width:58%;
  height: 100%;
}

@media screen and (max-width: 1550px) {
  width:780px;
}

@media screen and (max-width: 1440px) {
  width:740px;
}


@media screen and (max-width: 1190px) {
    
    width:660px;
    height: 90%;

  }

  @media screen and (max-width: 1080px) {
    
    width:610px;
    height: 90%;

  }
  @media screen and (max-width: 1024px) {
    position:absolute;
    
    width:870px;
  height: 583px;

  }

  @media screen and (max-width: 720px) {
    width:700px;
  }

 

  @media screen and (max-width: 600px) {
    width:580px;
    height: 480px;
  }

  @media screen and (max-width: 480px) {
    width:460px;
    height: 400px;
  }

  @media screen and (max-width: 440px) {
    width:400px;
    height: 340px;
  }

  @media screen and (max-width: 400px) {
    width:380px;
    height: 320px;
  }

  @media screen and (max-width: 360px) {
    width:330px;
    height: 290px;
  }
`;

export const Form = styled(motion.div)`
  position: absolute;
  background: var(--BlueColor);
  width: 225px;
  height: 162.05px;
  z-index: -1;

  

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
  left: 989px;
  bottom: 50px;
  box-sizing:border-box;

  @media screen and (min-width: 1700px) {
    left: 1100px;
    bottom: 100px;
  }

  @media screen and (max-width: 1600px) {
    left: 940px;
  }

  @media screen and (max-width: 1440px) {
    left: 860px;
  }

 

  @media screen and (max-width: 1280px) {
    left:700px;
  }

  @media screen and (max-width: 1050px) {
    left:600px;
  }

  @media screen and (max-width: 1024px) {
    bottom: 100px;
    left: 25%;
  }

  @media screen and (max-width: 810px) {
    bottom: 80px;
    left: 20%;
  }



  @media screen and (max-width: 400px) {
    bottom: 50px;
    left: 25%;
  }

  
`;

export const Form2 = styled(Form)`
  clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
  right: 8%;
  top: 80px;

  @media screen and (max-width: 1440px) {
    top: 120px;
    right: 4%;
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

export const ButtonHexa=styled(LinkS)`
background:var(--OrangeColor);
position: absolute;
width: 385px;
height: 72px;
margin-left: 164px;
top: 630px;
padding: 16px 24px;
border:none;
border-radius: 10px;
gap: 10px;
font-weight: 400;
font-size: 40px;
font-style:normal;
line-height: 40px;
text-align: center;
letter-spacing: 0.02em;
color:#fff;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
z-index:99;
outline:none;
cursor:pointer;

@media screen and (max-width:1440px) {
  margin-left: 95px;
}

@media screen and (max-width:1280px) {
  margin-left: 55px;
  top:600px;
}

@media screen and (max-width:1024px) {
  margin-left: 55px;
  top:480px;
}

@media screen and (max-width:600px) {
  margin-left: 55px;
  top:400px;
  font-size: 30px;
  width: 360px;
height: 60px;
}

@media screen and (max-width:480px) {
  
  top:350px;
  font-size: 30px;
  width: 270px;
height: 60px;
}

@media screen and (max-width:400px) {
  
  top:370px;
  font-size: 30px;
  width: 250px;
height: 60px;
}

@media screen and (max-width:360px) {
 
  top:390px;
  font-size: 30px;
  width: 230px;
height: 60px;
}

@media screen and (max-height:800px) {
 
 top:320px;
 font-size: 30px;
 width: 230px;
height: 60px;
}

&:hover {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), #FC6A05;
  
}


`;
