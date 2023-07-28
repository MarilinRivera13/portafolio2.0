import styled from "styled-components";
import { colors } from "../../styles/colors"; // Asegúrate de que la ruta sea correcta según tu estructura de archivos

export const ContainerAboutMe = styled.div``;

export const ContainerFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 768px) {
    display: block;
    padding: 0px 3px;
  }
`;

export const ContainerText = styled.div`
  padding: 0px 30px;

  @media (max-width: 768px) {
    padding: 0;
    text-align: center;
  }
`;

export const Title = styled.h1`
  margin: 0;
  padding: 20px 0;

  p {
    margin: 0;
  }

  p:nth-child(2) {
    font-size: 55px;
    background: ${colors.TEXT_GRADIENT_GREEN}; // Use the new green gradient color
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  @media (max-width: 768px) {
    padding: 0;

    p:nth-child(2) {
      font-size: 2rem;
    }
  }
`;

export const DescriptionText = styled.div`
  font-size: 18px;
  color: ${colors.TEXT_GREY_NEUTRAL}; // Use the new soft gray color
  padding-right: 50px;

  @media (max-width: 768px) {
    padding-right: 0;
    font-size: 16px;
  }
`;

export const ContainerIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  img {
    width: 32px;
    height: 32px;
    margin: 10px;
  }

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const ContainerImage = styled.div`
  text-align: center;
  max-width: 250px;
  margin: 0 auto;

  img {
    width: 100%;
    max-width: 250px;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px 0;

    img {
      width: 100%;
      max-width: 200px;
    }
  }
`;
