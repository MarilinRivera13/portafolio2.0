import styled from "styled-components";

export const ContainerContent = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px 30px;
  background-color: #d0c1f5; // Cambia este color a cualquier otro color atractivo que desees
  box-shadow: 0 2px 4px rgba(100, 100, 100, 0.2); // Cambia este sombreado por otro que te guste más
  border-radius: 8px;

  @media (max-width: 768px) {
    padding: 15px;
    border-radius: 0;
    box-shadow: none;
  }
`;

