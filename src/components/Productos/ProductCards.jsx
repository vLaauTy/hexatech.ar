import React, { useState } from "react";
import { dataSocials, datProducts, productsImg } from "../../data/dataInfo";
import {
  CategoryButtonimg,
  CategoryCard,
  CategoryCardInfo,
  CategoryCards,
  CategoryDescription,
  CategoryIcon,
  CategoryImage,
  CategoryImageContainer,
  CategoryName,
  CategoryPolygon,
} from "./ProductsElements";

const ProductCards = () => {
  const variants = {
    whileInViewText: { y: 0, opacity: 1, transition: { duration: 0.6 } },
    whileInViewText2: { y: 0, opacity: 1, transition: { duration: 0.9 } },
    whileInViewText3: { y: 0, opacity: 1, transition: { duration: 1.2 } },
    initialText2: { y: 100, opacity: 0 }
  };
// PONER LINK DE LA TIENDA
  console.log(dataSocials[0].LinkTienda);

  const [mouse, setMouse] = useState(false);
  const [mouse2, setMouse2] = useState(false);
  const [mouse3, setMouse3] = useState(false);
  return (
    <CategoryCards>
      <CategoryCard
        variants={variants}
        initial="initialText2"
        whileInView="whileInViewText"
        viewport="viewport"
      >
        <CategoryCardInfo>
          <CategoryIcon src="./assets/Temperatura-oscuro.png" />
          <CategoryName>Hexa Temp</CategoryName>
          {/* PONER DESCRIPCION DEL PRODUCTO */}
          <CategoryDescription>
          {datProducts[0].hexatemp}
          </CategoryDescription>
          <CategoryPolygon></CategoryPolygon>
          <CategoryImageContainer>
            {/* PONER IMAGEN QUE REPRESENTE EL PRODUCTO */}
            <CategoryImage src={productsImg[0].hexatemp}></CategoryImage>
            <a href={dataSocials[0].LinkTienda} target="_blank" rel="noreferrer">
              <CategoryButtonimg
                onMouseEnter={() => setMouse(true)}
                onMouseLeave={() => setMouse(false)}
                src={
                  mouse ? "./assets/BotonFlecha.png" : "./assets/BotonVer.png"
                }
              ></CategoryButtonimg>
            </a>
          </CategoryImageContainer>
        </CategoryCardInfo>
      </CategoryCard>

      <CategoryCard
        variants={variants}
        initial="initialText2"
        whileInView="whileInViewText2"
        viewport="viewport"
      >
        <CategoryCardInfo>
          <CategoryIcon src="./assets/Rectangle 13.png" />
          <CategoryName>Hexa Tech</CategoryName>
          <CategoryDescription>
            {/* PONER DESCRIPCION DEL PRODUCTO */}
            {datProducts[0].hexatech}
          </CategoryDescription>
          <CategoryPolygon></CategoryPolygon>
          <CategoryImageContainer>
            {/* PONER IMAGEN QUE REPRESENTE EL PRODUCTO */}
            <CategoryImage src={productsImg[0].hexatech}></CategoryImage>

            <a href={dataSocials[0].LinkTienda} target="_blank" rel="noreferrer">
              <CategoryButtonimg
                onMouseEnter={() => setMouse2(true)}
                onMouseLeave={() => setMouse2(false)}
                src={
                  mouse2 ? "./assets/BotonFlecha.png" : "./assets/BotonVer.png"
                }
              ></CategoryButtonimg>
            </a>
          </CategoryImageContainer>
        </CategoryCardInfo>
      </CategoryCard>

      <CategoryCard
        variants={variants}
        initial="initialText2"
        whileInView="whileInViewText3"
        viewport="viewport"
      >
        <CategoryCardInfo>
          <CategoryIcon src="./assets/Quimica-claro.png" />
          <CategoryName>Hexa Chem</CategoryName>
          <CategoryDescription>
            {/* PONER DESCRIPCION DEL PRODUCTO */}
            {datProducts[0].hexachem}
          </CategoryDescription>
          <CategoryPolygon></CategoryPolygon>
          <CategoryImageContainer>

            {/* PONER IMAGEN QUE REPRESENTE EL PRODUCTO */}
            <CategoryImage src={productsImg[0].hexachem}></CategoryImage>
            <a href={dataSocials[0].LinkTienda} target="_blank" rel="noreferrer">
              <CategoryButtonimg
                onMouseEnter={() => setMouse3(true)}
                onMouseLeave={() => setMouse3(false)}
                src={
                  mouse3 ? "./assets/BotonFlecha.png" : "./assets/BotonVer.png"
                }
              ></CategoryButtonimg>
            </a>
          </CategoryImageContainer>
        </CategoryCardInfo>
      </CategoryCard>
    </CategoryCards>
  );
};

export default ProductCards;
