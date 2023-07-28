import React, {useState, useRef} from "react";
import  * as S from "./Contact.styles";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const [contactDates, setContactDates] = useState({
        name:"",
        email:"",
        message:"",
        checkedTerms:false,
    });
    const [emptyInputs, setEmptyInputs] = useState(false);
    const [successSendForm, setsuccessSendForm] = useState(false);
    const [errorSendForm, setErrorSendForm] = useState(false);

    const form= useRef();

    const onSubmit = (e) => {
        //evitar el recargo de la página
        e.preventDefault();

        //validar formulario
        if(contactDates.name==="" || 
           contactDates.email==="" || 
           contactDates.message==="" || 
           contactDates.checkedTerms===false){
            setEmptyInputs(true);
        }
        else{
            emailjs.sendForm(
                'service_o4q7rei',//AQUí va su ID DE SERVICIO EMAILJS
                'template_wi4i67e',//AQUÍ VA EL TEMPLATE ID
                form.current,
                'APifF4iNOUniC3VCh'//AQUÍ VA LA PUBLIC KEY
            ).then(
                (result) =>{
                    setsuccessSendForm(true);
                },
                (error) =>{
                    setErrorSendForm(true);
                }
            );
        }

    };
    return(
        <S.ContainerContact id="contact">
            <S.Title>👋🏽 Contactame aqui.</S.Title>
            <S.ContainerForm>
                {successSendForm ? (
                    <S.SuccessMessage>El formulario fue enviado con exito</S.SuccessMessage>
                ) : (
                    <S.Form onSubmit = {onSubmit} ref={form}>
                        <S.InputForm
                            placeholder="Your name"
                            type="text"
                            name="name"
                            onChange={(e) =>
                                setContactDates({...contactDates, name: e.target.value})
                            }
                            value={contactDates.name}
                        />
                        <S.InputForm
                            placeholder="email"
                            type="email"
                            name="email"
                            onChange={(e) =>
                                setContactDates({...contactDates, email: e.target.value})
                            }
                            value={contactDates.email}
                        />
                        <S.TextArea
                            placeholder="Write your message"
                            name="message"
                            onChange={(e) =>
                                setContactDates({...contactDates, message:e.target.value})
                            }
                            value={contactDates.message}
                        />
                        <S.ContainerConditions>
                            <input
                                type="checkbox"
                                onChange={(e) =>
                                    setContactDates({
                                        ...contactDates,
                                        checkedTerms: e.target.checked,
                                    })
                                }
                            />
                            <span>Acepta terminos y condiciones.</span>
                        </S.ContainerConditions>
                        <S.Button type="submit">Enviar</S.Button>
                    </S.Form>
                )}
                {emptyInputs && (
                    <p>Debe completar todas las entradas y aceptar los términos</p>
                )}
                {errorSendForm && (
                    <S.TextError>Hubo un error, inténtalo más tarde.</S.TextError>
                )}
                        
            </S.ContainerForm>
        </S.ContainerContact>
    );

};


export default Contact;