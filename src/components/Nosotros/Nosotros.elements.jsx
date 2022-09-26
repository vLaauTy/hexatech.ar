
import styled from "styled-components";

export const AboutMe = styled.div`
  background: var(--BlueColor200);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  position: relative;
  overflow: hidden;

  z-index:1;
    width:100%;
    margin-right:auto;
    margin-left:auto;
    padding-right:50px;
    padding-left:50px;

    @media screen and (max-width:991px) {
        padding-right:30px;
    padding-left:30px;
    height:130vh;
    
    }

    
    @media screen and (max-height:700px) {
        
    
    
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
  height:auto;
  max-width: 1800px;
  position: absolute;
  padding: 8px 40px;
  display: flex;
  align-items: center;
  
  width: 100%;
  height: 100%;

  @media screen and (max-width:950px) {
  flex-direction:column-reverse;

  padding: 4px 20px;
}



@media screen and (max-width:480px) {
  padding:0;

}


`;

export const AboutDesc = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  height:80%;
  
  margin-bottom:50px;

  @media screen and (max-width:950px) {
  width:80%;
height:28%;
}

@media screen and (max-width:480px) {
  width:100%;

}
  
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

  @media screen and (max-width:950px) {
  width:100%;
  font-size: 35px;
}
`;

export const AboutDescContent = styled.div`
  width: 90%;
  height:80%;
  
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
`;

export const AboutImgContent=styled.div`
width:50%;
height:80%;
display:flex;
justify-content:center;

@media screen and (max-width:950px) {
  width:80%;
height:50%;
align-items:flex-start;
justify-content:center;
}
`;

export const AboutImg=styled.img`
margin:auto 0;
  width: 32rem;
height: 32rem;
display:flex;
align-items:flex-end;

@media screen and (max-width:950px) {
  width: 25rem;
height: 25rem;
margin: 0;
}
`;

export const PolygonImg=styled.div`
position:absolute;
left:0;
top:20rem;
margin:auto;
z-index:-1;
  clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
  width:300px;
  height:300px;
  background:var(--OrangeColor);
  
`;