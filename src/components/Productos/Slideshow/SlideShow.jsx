import React, { useEffect, useRef, useCallback } from "react";
import styled from "styled-components";

const Slideshow = ({
  children,
  controles = false,
  autoplay = false,
  velocidad = "500",
  intervalo = "5000",
}) => {
  const slideshow = useRef(null);
  const intervaloSlideshow = useRef(null);

  const siguiente = useCallback(() => {
    // Comprobamos que el slideshow tenga elementos
    if (slideshow.current.children.length > 0) {
      console.log("Siguiente");

      // Obtenemos el primer elemento del slideshow.
      const primerElemento = slideshow.current.children[0];

      // Establecemos la transicion para el slideshow.
      slideshow.current.style.transition = `${velocidad}ms ease-out all`;

      const tamañoSlide = slideshow.current.children[0].offsetWidth;

      // Movemos el slideshow
      slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

      const transicion = () => {
        // Reiniciamos la posicion del Slideshow.
        slideshow.current.style.transition = "none";
        slideshow.current.style.transform = `translateX(0)`;

        // Tomamos el primer elemento y lo mandamos al final.
        slideshow.current.appendChild(primerElemento);

        slideshow.current.removeEventListener("transitionend", transicion);
      };

      // Eventlistener para cuando termina la animacion.
      slideshow.current.addEventListener("transitionend", transicion);
    }
  }, [velocidad]);

  const anterior = () => {
    console.log("Anterior");
    if (slideshow.current.children.length > 0) {
      // Obtenemos el ultimo elemento del slideshow.
      const index = slideshow.current.children.length - 1;
      const ultimoElemento = slideshow.current.children[index];
      slideshow.current.insertBefore(
        ultimoElemento,
        slideshow.current.firstChild
      );

      slideshow.current.style.transition = "none";
      const tamañoSlide = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

      setTimeout(() => {
        slideshow.current.style.transition = `${velocidad}ms ease-out all`;
        slideshow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  useEffect(() => {
    if (autoplay) {
      intervaloSlideshow.current = setInterval(() => {
        siguiente();
      }, intervalo);

      // Eliminamos los intervalos
      slideshow.current.addEventListener("mouseenter", () => {
        clearInterval(intervaloSlideshow.current);
      });

      // Volvemos a poner el intervalo cuando saquen el cursor del slideshow
      slideshow.current.addEventListener("mouseleave", () => {
        intervaloSlideshow.current = setInterval(() => {
          siguiente();
        }, intervalo);
      });
    }
  }, [autoplay, intervalo, siguiente]);

  return (
    <ContenedorPrincipal>
      <ContenedorSlideShow ref={slideshow}>{children}</ContenedorSlideShow>
      {controles && (
        <Controles>
          <Boton   onClick={anterior}>
            &larr;
          </Boton>
          <Boton  state onClick={siguiente}>
            &rarr;
          </Boton>
        </Controles>
      )}
    </ContenedorPrincipal>
  );
};

const ContenedorPrincipal = styled.div`
  position: relative;
`;

const ContenedorSlideShow = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

export const Controles = styled.div`
  width: 100%;
  height: 175px;
  pointer-events:none;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top:5rem;

  @media screen and (max-width:380px) {
    margin-top:80px;
  }
`;

export const Boton = styled.button`
  pointer-events: all;
 
  background-color: #fc6a05;
  border:none;
  
  border-radius: ${({ state }) => (state ?  '0px 10px 10px 0px': '10px 0px 0px 10px')};
  transition: all 300ms ease-in-out;
  width: 60px;
  height: 40px;
  text-align: center;
  transition: 0.3s ease all;
  padding:0.1rem;
  margin: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size:1.5rem;
  z-index:99;

  &:focus {
    outline: none;
  }

  &:active {
    background: var(--BlueColor);
  }
 
`;

export const CategoryCardsMobile = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    width: auto;
    height: auto;
    margin: 5px auto;
    overflow: hidden;
    position: relative;
  }
`;

export const CategoryCardMobile = styled.div`
  background: #fff;
  min-width: 100%;
  width: 120px;
  height: 410px;

  box-shadow: 5px 5px 20px rgba(50, 64, 147, 0.1);
  position: relative;
  top: 0;

  transition: 0.3s ease all;

  text-align: left;

  @media screen and (max-width:380px) {
    width: 100px;
  height: 380px;
  }
`;

export { Slideshow };
