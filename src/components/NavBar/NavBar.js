import React, {useState} from "react";
import * as S from "./NavBar.styles";

const NavBar = () => {
    const [showMenuBurguer, setShowMenuBurguer] = useState(false);
    const clickItemNav = (item) =>{
        console.log(item);
        document.getElementById(item).scrollIntoView({behavior:"smooth"});

    };
    return(
        <S.ContainerNavBar>
            <S.ContainerLogo>
                <S.ImageLogo src="/img/WhatsApp-Image-2023-07-27-at-4.40.54-PM.jpeg" alt="Logo marilin"/>
                <div>
                    <h1>Marilin Rivera</h1>
                    <h2>Ingeniera de sistemas</h2>
                </div>
            </S.ContainerLogo>
            <S.ContainerBurguer onClick={() => setShowMenuBurguer(!showMenuBurguer)}>
                <S.BurguerMenu />
                <S.BurguerMenu />
                <S.BurguerMenu />   
            </S.ContainerBurguer>

            <S.ContainerItems showMenuBurguer={showMenuBurguer}>
                <p onClick={() => clickItemNav("about-me")}>sobre mi</p>
                <p onClick={() => clickItemNav("projects")}>Proyectos</p>
                <S.Button onClick={() => clickItemNav("contact")}> 🤙 Contactame</S.Button>
            </S.ContainerItems>


        </S.ContainerNavBar>
    );
};

export default NavBar;