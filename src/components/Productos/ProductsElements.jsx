import { motion } from "framer-motion";
import styled from "styled-components";

export const CategoryContainer = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  height: 100vh;
  position: relative;

  @media screen and (max-width: 768px) {
    padding: 10px;
    position: relative;
    align-items: center;
  }

  

  @media screen and (max-width: 600px) {
    padding: 10px;
    position: relative;
    align-items: flex-end;
    justify-content:flex-end;
    margin:auto;
  }

  

  @media screen and (max-height: 1000px) {
    height: 100vh;
  }

  @media screen and (max-height: 800px) {
    height: auto;
    justify-content: flex-start;
  }

  @media screen and (max-height: 750px) {
    height: 150vh;
    justify-content: center;
  }

  @media screen and (max-height: 700px) {
    height: 170vh;
  }

  @media screen and (max-height: 660px) {
    height:180vh;
  }

  @media (max-width:600px) and (max-height: 880px) {
      
      height:110vh;
    }

  @media (max-width: 1024px) and (max-height: 700px) {
    height: 130vh;
  }







  @media screen and (max-height: 660px) {
    height: 180vh;
    justify-content: center;
  }

  @media screen and (max-height: 600px) {
    height: 230vh;
    justify-content: center;
  }
`;

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 768px) {
    position: relative;
    justify-content: center;
  }

  @media screen and (max-height: 660px) {
    height:180vh;
  }

  @media screen and (max-width:600px) {
    align-items: center;
    justify-content:center;
    
  }

  @media (max-width:768px) and (max-height: 1050px) {
      
      justify-content:flex-start;
  }

  @media (max-width:600px) and (max-height: 1050px) {
      
    align-items: center;
    justify-content:center;
  }

  @media (max-width:600px) and (max-height: 950px) {
      
      align-items: center;
      justify-content:flex-end;
    }

    

  @media screen and (max-height: 800px) {
    height: auto;
  }
`;

export const CategoryTittle = styled(motion.h2)`
  color: var(--BlueColor);
  font-weight: 400;
  font-size: 60px;
  line-height: 72px;
  letter-spacing: 0.04em;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    font-size: 35px;
  }

  @media screen and (max-width: 768px) {
    font-size: 35px;
  }

  @media screen and (max-height: 800px) {
    margin-top: 0;
    margin: 3rem auto;
  }

  /* @media screen and (max-height: 675px) {
    margin: 10rem auto;
  }

  @media screen and (max-height: 645px) {
    margin: 13rem auto;
  } */
`;

export const CategoryCards = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 100px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 250px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const CategoryCard = styled(motion.div)`
  background: #ffffff;
  width: 434px;
  height: 585px;
  text-decoration: none;
  box-shadow: 5px 5px 20px rgba(50, 64, 147, 0.1);

  &:nth-child(2) {
    margin: 0 20px;
  }

  @media screen and (max-width: 1280px) {
    &:nth-child(2) {
      margin: 20px;
    }
    width: 320px;
    height: 450px;
  }

  @media screen and (max-width: 1090px) {
    &:nth-child(2) {
      margin: 20px;
    }
    width: 290px;
    height: 420px;
  }

  @media screen and (max-width: 1024px) {
    &:nth-child(2) {
      margin: 10px;
    }
    width: 300px;
    height: 430px;
  }

  @media screen and (max-width: 900px) {
    &:nth-child(2) {
      margin: 10px;
    }
    width: 270px;
    height: 400px;
  }
`;

export const CategoryCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  align-items: flex-start;

  /* &:hover .h  {
    color:var(--BlueColor)
    
  } */
`;

export const CategoryIcon = styled.img`
  margin-top: 25px;
  margin-left: 30px;
  width: 60px;
  height: 60px;

  @media screen and (max-width: 1000px) {
    width: 30px;
    height: 30px;
  }

  @media screen and (max-width: 768px) {
    width: 50px;
    height: 50px;

    margin-bottom: 15px;
  }
`;

export const CategoryName = styled.h3`
  font-size: 50px;
  margin: 0 30px;
  color: #6c6c6c;
  font-weight: 400;
  line-height: 72px;
  letter-spacing: 0.04em;
  transition: all 0.3s ease-in-out;

  ${CategoryCardInfo}:hover & {
    color: var(--BlueColor);
    transition: all 0.3s ease-in-out;
  }

  @media screen and (max-width: 1090px) {
    font-size: 40px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 35px;
  }

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`;

export const CategoryDescription = styled.p`
  font-size: 30px;
  margin: 0 30px;
  color: var(--BlueColor);
  font-weight: 300;
  color: #747474;
  line-height: 36px;
  font-style: normal;

  @media screen and (max-width: 1090px) {
    font-size: 25px;
    line-height: 29px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 20px;
    line-height: 24px;
  }

  @media screen and (max-width: 768) {
    font-size: 18px;
  }
`;

export const CategoryImageContainer = styled.div`
  display: inline-block;
  position: absolute;
  bottom: 360px;

  @media screen and (min-width: 768px) {
    position: relative;
  }
`;

export const CategoryImage = styled.img`
  position: absolute;
  height: 322px;
  width: 322px;
  margin-left: 60px;
  transition: all 0.3s ease-in-out;

  ${CategoryCardInfo}:hover & {
    transform: translateY(-20px);
    transition: all 0.3s ease-in-out;
    @media screen and (max-width: 758px) {
      transform: none;
    }
  }

  @media screen and (max-width: 1280px) {
    height: 300px;
    width: 300px;
    margin-left: 40px;
  }

  @media screen and (max-width: 1090px) {
    height: 225px;
    width: 225px;
    margin-left: 30px;
    top: 100px;
  }

  @media screen and (max-width: 1024px) {
    width: 200px;
    height: 200px;
    margin-left: 40px;
  }

  @media screen and (max-width: 768px) {
    width: 200px;
    height: 200px;
    margin-left: 70px;
    top: 190px;
    position: absolute;
  }

  @media screen and (max-width: 380px) {
    width: 180px;
    height: 180px;
    margin-left: 50px;
    top: 220px;
  }
`;

export const CategoryPolygon = styled.div`
  clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);
  margin-top: 60px;
  margin-left: 90px;
  background: #c8c9da;
  height: 346px;
  width: 263px;
  transform: rotate(90deg);
  transition: all 0.3s ease-in-out;

  ${CategoryCardInfo}:hover & {
    background: var(--BlueColor);
    transition: all 0.3s ease-in-out;
  }

  @media screen and (max-width: 1280px) {
    height: 320px;
    width: 238px;
    margin-left: 70px;
  }

  @media screen and (max-width: 1090px) {
    height: 250px;
    width: 170px;
    margin-left: 70px;
    margin-top: 30px;
  }

  @media screen and (max-width: 1024px) {
    height: 230px;
    width: 150px;
    margin-left: 70px;
  }

  @media screen and (max-width: 768px) {
    height: 230px;
    width: 150px;
    margin-left: 100px;
    margin-top: 10px;
  }

  @media screen and (max-width: 380px) {
    height: 210px;
    width: 130px;
    margin-left: 80px;
    margin-top: 10px;
  }
`;
export const CategoryButtonimg = styled.img`
  cursor: pointer;
  position: absolute;
  pointer-events: all;
  top: 15.5rem;
  left: 8rem;

  @media screen and (max-width: 1280px) {
    left: 6rem;
  }

  @media screen and (max-width: 1090px) {
    left: 4rem;
    top: 16rem;
    width: 140px;
    height: 110px;
  }

  @media screen and (max-width: 768px) {
    left: 7.5rem;
    top: 21rem;
    width: 130px;
    height: 100px;
  }

  @media screen and (max-width: 380px) {
    left: 110px;
    width: 120px;
    height: 90px;
    top: 20rem;
  }
`;
