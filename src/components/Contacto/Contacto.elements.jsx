import styled from "styled-components";


export const ContactContainer= styled.section`
    z-index:9999;
    height:95vh;
    width:100%;
    margin-right:auto;
    margin-left:auto;
    padding-right:50px;
    padding-left:50px;
    background: linear-gradient(0deg, rgba(22, 28, 65, 0.7), rgba(22, 28, 65, 0.7)), url('./assets/Contacto.png');
    background-repeat:no-repeat;
    background-size:cover;
    


    @media screen and (max-width:1200px) {
        padding:0.8rem;
    }

    @media screen and (max-width:1180px) {
        padding:0.3rem;
    }

    @media screen and (max-width:768px) {
        height:auto;
    }

    @media screen and (max-height:700px) {
        
    }

`;

export const ContactWrapper=styled.div`
height:100%;
width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:flex-start;
    padding:4rem 6rem;

    @media screen and (max-width:1180px) {
        padding:0;
    }

    @media screen and (max-width:768px) {
       flex-direction:column;
       padding:2rem 6rem;
       justify-content:center;
    align-items:center;
    }

    @media screen and (max-width:400px) {
        padding:0.5rem 1rem;
    }

    @media screen and (max-height:830px) {
        padding:0.5rem 1rem;
    }
`;

export const ContactTextWrapper=styled.div`
    width:40%;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    height:100%;
    margin-top:2rem;
    margin-left:5rem;

    @media screen and (max-width:768px) {
        width:90%;
        margin-top:0;
        margin-bottom:3rem;
    }
`;

export const ContactTittle=styled.h3`
    color:#fff;
    font-size:3rem;
    font-style: normal;
font-weight: 400;
line-height: 60px;
letter-spacing: 0.04em;


@media screen and (max-width:768px) {
        margin-top:2rem;
    }

`;

export const ContactText=styled.p`
    font-size:2rem;
    font-style: normal;
font-weight: 300;
line-height: 36px;
color:#fff;
margin-top:4rem;

@media screen and (max-width:768px) {
    margin-top:2rem;
    }
`;

export const ContactIcons=styled.div`
    display:flex;
    flex-direction:column;
    margin-top:4rem;
    
    &:nth-child(2) {
    margin: 80px 0;
  }

  @media screen and (max-width:630px) {
    margin-left:1rem;
    }
`;

export const ContactIconsWrapper=styled.div`
    display:flex;
    flex-direction:row;
    &:nth-child(2) {
    margin: 1.4rem 0;
  }
`;

export const ContactIcon=styled.img`
    margin-right:3rem;

    @media screen and (max-width:385px) {
    width:20px;
    height:20px;
    }
`;





export const ContactInfo=styled.p`
    color:#fff;
    font-style: normal;
font-weight: 300;
font-size: 1.9rem;
line-height: 30px;
letter-spacing: 0.04em;
text-align:left;


@media screen and (max-width:920px) {
    font-size: 1.6rem;
    }

    @media screen and (max-width:805px) {
    font-size: 1.2rem;
    }
@media screen and (max-width:768px) {
    font-size: 2rem;
    }

    @media screen and (max-width:650px) {
    font-size: 1.5rem;
    }

    


`;

export const ContactForm=styled.div`
    width:45%;
    height:100%;
    padding: 0.8rem;

    @media screen and (max-width:950px) {
        width:60%;
    }

    @media screen and (max-width:768px) {
        width:100%;
    }

    @media screen and (max-width:700px) {
        max-height:60rem;
    }
    
`;

export const Form=styled.form`
    height:100%;
    width: 90%;
    background:#fff;
    display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
padding: 24px;
gap:30px;

box-shadow: 5px 5px 20px rgba(50, 64, 147, 0.1);
border-radius: 10px;

@media screen and (max-width:700px) {
    height:40rem;
    }

    @media screen and (max-width:500px) {
        justify-content: center;
align-items: center;
    }

    

    
`;

export const LabelForm=styled.label`
    display:flex;
    align-items:flex-start;
    text-align:left;
    width:100%;
    font-family: 'Teko';
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 32px;

letter-spacing: 0.02em;

color: #747474;
    &:nth-child(2) {
    margin: 80px 0;
  }

  @media screen and (max-height:860px) {
    font-size: 26px;
    letter-spacing: 0.01em;
    
    line-height: 20px;
    }

    @media screen and (max-width:500px) {

    margin-left:7rem;
    }

    
`; 

export const InputForm=styled.input`
    width:100%;
    height:4rem;
    padding-left: 16px ;
gap: 10px;
border: 1px solid #747474;
border-radius: 10px;
color:#747474;
font-size:2rem;
padding-top: 10px;
margin-top:-15px;

::placeholder {
    color: #C3C3C3;
       font-size:2rem;
   }

   @media screen and (max-height:860px) {
    height:2.8rem;
    padding-top: 5px;
    
    }

    @media screen and (max-width:768px) {
        width:90%;
    }

    @media screen and (max-width:500px) {
        width:70%;
    }
`;

export const TextArea=styled.textarea`
    max-width:100%;
    min-height:8rem;
    height:100%;
    max-height:20rem;
    padding-left: 16px ;
gap: 10px;
border: 1px solid #747474;
border-radius: 10px;
color:#747474;
font-size:2rem;
box-sizing:border-box;
overflow:hidden;
margin-top:-15px;
  

::placeholder {
    color: #C3C3C3;
       font-size:2rem;
   }
   @media screen and (max-height:950px) {
    min-height:4rem;
    }

   @media screen and (max-height:768px) {
    width:90%;
    }
   @media screen and (max-width:700px) {
    min-height:7rem;
    }

    @media screen and (max-width:500px) {
        width:70%;
    }

    

   
`;

export const ButtonSend=styled.button`
    background: var(--OrangeColor);
  width: 20rem;
  height: 5rem;
  margin:auto;
  padding: 16px 24px;
  border: none;
  border-radius: 10px;
  font-weight: 400;
  font-size: 40px;
  font-style: normal;
  line-height: 40px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   pointer-events:all;
  outline: none;
  cursor: pointer;

  &:hover {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
      #fc6a05;
  }


  @media screen and (max-width:480px) {
    width: 15rem;
  height: 5rem;
    }

    @media screen and (max-width:400px) {
    width: 10rem;
  height: 5rem;
    }

    @media screen and (max-height:960px) {
        width: 15rem;
  height: 3rem;
  font-size: 30px;
  letter-spacing: 0.01em;
  line-height: 27px;
    }
  
    @media screen and (max-height:830px) {
      
    }
  
`;

export const AlertaCampo=styled.small`
    color: #747474;
       font-size:1rem;
`;

export const LabelContainer=styled.div`
    
`;