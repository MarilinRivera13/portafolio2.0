import styled from "styled-components";

export const ContainerProjects = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding-top: 50px;

  @media (max-width: 768px) {
    padding-top: 10px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 36px;
  span {
    font-size: 48px;
    background: linear-gradient(135deg, #ffcc00 0%, #66ccff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const ContentProject = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 468px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ProjectContent = styled.div`
  padding: 0 10px;
`;

export const TitleProject = styled.h3`
  padding: 8px 15px;
  font-size: 25px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 10px;
  color: #ffffff; /* White text */
  background: linear-gradient(135deg, #0066cc 0%, #ff3399 100%); /* Gradient colors (blue to pink) */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-decoration: none;
`;

export const ContainerImage = styled.div`
  text-align: center;
  img {
    width: 100%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    img {
      max-width: 250px;
    }
  }
`;

export const ContainerTechs = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;
  justify-content: space-evenly;

  div {
    text-align: center;
  }
  img {
    width: 35px;
    height: auto;
    margin: 0 5px;
  }

  p {
    margin-top: 2px;
    font-size: 13px;
    color: #999999; /* Grey text */
  }
`;

export const Description = styled.div`
  margin-top: 0;
`;

export const ContainerFooter = styled.div`
  display: flex;
  margin-top: 10px;

  img {
    width: 35px;
  }

  a:first-of-type {
    padding: 0 20px;
  }
`;
