import React from "react";
import * as S from "./AboutMe.styles";
import logoGithub from "../../svg/github.svg";
import logoLinkeind from "../../svg/linkedin.svg";
import logoYoutube from "../../svg/youtube.svg";

const AboutMe = () => {
    const socialNetworks =[
        {
            name:"Github",
            link:"https://github.com/MarilinRivera13",
            logo:logoGithub,
        },
        {
            name:"Linkedind",
            link:"www.linkedin.com/in/marilin-esther-rivera-pérez-62983b195",
            logo:logoLinkeind,
        },
        {
            name:"Youtube",
            link:"https://www.youtube.com",
            logo:logoYoutube,
        },
    ];

    return (
        <S.ContainerAboutMe id="about-me">
            <S.ContainerFlex>
                <S.ContainerText>
                    <S.Title>
                        <p>👋🏼 Hola, mucho gusto</p>
                        <p>Marilin Rivera Perez</p>
                        <p>Ing. Sistemas</p>
                    </S.Title>
                    <S.DescriptionText>
                    Estudiante de decimo semestre de Ing. de Sistemas.
                    </S.DescriptionText>
                    <S.ContainerIcons>
                    {socialNetworks.map((network, index)=>(
                        <a
                            key={index}
                            href={network.link}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={network.logo} alt={network.name}/>
                        </a>
                    ))}
                </S.ContainerIcons>
                </S.ContainerText>
                <S.ContainerImage>
                    <img src="/img/logo.png" alt="Marilin Rivera Perez - Ing. Sistemas"/>
                </S.ContainerImage>
            </S.ContainerFlex>
        </S.ContainerAboutMe>
    );
};
export default AboutMe;