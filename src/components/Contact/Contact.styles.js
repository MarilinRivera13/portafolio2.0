import styled from "styled-components";
import { colors } from "../../styles/colors"; // Asegúrate de que la ruta sea correcta según tu estructura de archivos

export const ContainerContact = styled.div`
  padding: 50px 0;

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 36px;
  color: ${colors.TEXT_GRADIENT_GREEN}; // Use the new green gradient color
  margin-bottom: 30px;
`;

export const ContainerForm = styled.div`
  max-width: 600px;
  border-radius: 10px;
  box-shadow: ${colors.BOX_SHADOW_BLUE}; // Use the new blue shadow color
  padding: 30px;
  margin: 0 auto;
  background-color: ${colors.TEXT_WHITE}; // Use the new white color
`;

export const Form = styled.form`
  box-sizing: border-box;
`;

export const InputForm = styled.input`
  padding: 12px;
  border-radius: 8px;
  border: 2px solid ${colors.TEXT_GREY_NEUTRAL}; // Use the new soft gray color
  background-color: ${colors.TEXT_WHITE}; // Use the new white color
  font-size: 16px;
  display: block;
  width: 100%;
  margin-bottom: 20px;
  color: ${colors.TEXT_BLACK}; // Use the new pure black color
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${colors.TEXT_GRADIENT_GREEN}; // Use the new green gradient color
  }
`;

export const TextArea = styled.textarea`
  padding: 12px;
  border-radius: 8px;
  border: 2px solid ${colors.TEXT_GREY_NEUTRAL}; // Use the new soft gray color
  background-color: ${colors.TEXT_WHITE}; // Use the new white color
  font-size: 16px;
  display: block;
  width: 100%;
  margin-bottom: 20px;
  color: ${colors.TEXT_BLACK}; // Use the new pure black color
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${colors.TEXT_GRADIENT_GREEN}; // Use the new green gradient color
  }
`;

export const Button = styled.button`
  color: ${colors.TEXT_WHITE};
  box-shadow: ${colors.BOX_SHADOW_BUTTON}; // Use the new pink button shadow color
  background: ${colors.TEXT_GRADIENT_GREEN}; // Use the new green gradient color
  padding: 12px 40px;
  border-radius: 50px;
  border: none;
  margin: 15px 0;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  width: 180px;
  text-transform: uppercase;
  transition: background-color 0.3s ease;

  &:hover {
    background: ${colors.BACKGROUND_GRADIENT_PINK}; // Use the new pink gradient color
  }
`;

export const ContainerConditions = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${colors.TEXT_GREY_NEUTRAL}; // Use the new soft gray color
  font-size: 14px;
  margin-top: 20px;

  span {
    color: ${colors.TEXT_BLACK}; // Use the new pure black color
    margin-left: 5px;
  }
`;

export const TextError = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`;

export const SuccessMessage = styled.p`
  color: green;
  font-size: 14px;
  margin-top: 10px;
`;
