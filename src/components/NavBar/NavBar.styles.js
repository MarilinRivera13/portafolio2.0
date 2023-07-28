import styled from "styled-components";

// New Color Palette
const colors = {
  primary: "#ff5a5f", // Attractive Red
  secondary: "#008489", // Attractive Teal
  textWhite: "#f0f0f0", // Light Greyish White
  textBlack: "#111111", // Dark Greyish Black
  textGradientPurple: "linear-gradient(45deg, #6c63ff, #ff5a5f)", // Gradient from Purple to Attractive Red
  boxShadowBlue: "5px 5px 15px rgba(108, 99, 255, 0.3)", // Soft Blue Shadow
  boxShadowButton: "2px 2px 5px rgba(255, 90, 95, 0.5)", // Soft Pink Shadow
};

export const ContainerNavBar = styled.div`
  max-width: 100vw;
  height: 100px;
  box-shadow: ${colors.boxShadowBlue};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background: ${colors.textWhite};
`;

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;

  h1,
  h2 {
    font-weight: 700;
    color: ${colors.textBlack};
    margin: 0;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    background: ${colors.textGradientPurple};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const ImageLogo = styled.img`
  width: 90px;
  padding-right: 20px;
`;

export const ContainerItems = styled.div`
  display: flex;
  align-items: center;

  p {
    cursor: pointer;
    padding: 0 13px;
    text-decoration: none;
    color: ${colors.textBlack};
    font-weight: 500;
  }

  @media (max-width: 768px) {
    display: ${(props) => (props.showMenuBurguer ? "inline-grid" : "none")};
    position: absolute;
    top: 100px;
    background: ${colors.textWhite};
    box-shadow: ${colors.boxShadowBlue};
    padding: 10px 0 20px 0;
    width: 100%;
    left: 0;

    a {
      padding: 10px 20px;
    }
  }
`;

export const Button = styled.button`
  color: ${colors.textWhite};
  box-shadow: ${colors.boxShadowButton};
  background: ${colors.textGradientPurple};
  padding: 12px 20px;
  border-radius: 999px;
  border: none;
  margin: 10px 0;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 50%;
    margin: 5px 10px 0 10px;
  }
`;

export const ContainerBurguer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const BurguerMenu = styled.div`
  width: 35px;
  height: 2px;
  background-color: ${colors.textBlack};
  margin: 6px 0;
`;
