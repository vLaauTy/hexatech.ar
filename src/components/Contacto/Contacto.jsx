import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { dataContact } from "../../data/dataInfo";
import {
  AlertaCampo,
  ButtonSend,
  ContactContainer,
  ContactForm,
  ContactIcon,
  ContactIcons,
  ContactIconsWrapper,
  ContactInfo,
  ContactText,
  ContactTextWrapper,
  ContactTittle,
  ContactWrapper,
  Form,
  InputForm,
  LabelForm,
  TextArea,
} from "./Contacto.elements";
import emailjs from "emailjs-com";
const Contacto = () => {
  console.log(dataContact);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
   
  } = useForm({defaultValues: { yes_i_understand: false }});

  const customSubmit = (formData) => {
   
    
    toast.success("Su mensaje ha sido enviado", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

    emailjs.send(
      "service_l398n2e",
      "template_ug7micf",
      formData,
      "h9sehvlriCS0rSiHy"
    ).then(response=>console.log(response))
    .catch(error => console.log(error));

    reset()

    
  };

  return (
    <ContactContainer id="contacto">
      <ContactWrapper>
        <ContactTextWrapper >
          <ContactTittle>Contáctanos</ContactTittle>
          <ContactText>
            Envíanos tu consulta a través del formulario y nos pondremos en
            contacto contigo a la brevedad. De cualquier manera, también puedes
            optar por los medios mencionados a continuación.
          </ContactText>
          <ContactIcons>
            <ContactIconsWrapper>
              <ContactIcon src="./assets/Telefono.png"></ContactIcon>
              <ContactInfo>{dataContact[0].Numero}</ContactInfo>
            </ContactIconsWrapper>
            <ContactIconsWrapper>
              <ContactIcon src="./assets/Sobre2.png"></ContactIcon>
              <ContactInfo>{dataContact[0].mail}</ContactInfo>
            </ContactIconsWrapper>
            <ContactIconsWrapper>
              <ContactIcon src="./assets/Ubicacion.png"></ContactIcon>
              <ContactInfo>Argentina</ContactInfo>
            </ContactIconsWrapper>
          </ContactIcons>
        </ContactTextWrapper>

        <ContactForm>
          <Form   onSubmit={handleSubmit(customSubmit)}>
            <LabelForm>Nombre</LabelForm>
            <InputForm
              name="name"
              placeholder="Nombre"
              type="text"
              {...register("name", { required: true })}
            />
            {errors.name && <AlertaCampo>Ingrese un nombre</AlertaCampo>}
            

            
            <LabelForm>Correo</LabelForm>
            <InputForm
              name="mail"
              
              placeholder="correo@email.com"
              {...register("mail", {
                required: true,
                pattern:
                  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
              })}
            />
            {errors.mail?.type === "required" && (
              <AlertaCampo>Ingrese un mail</AlertaCampo>
            )}{" "}
            {errors.mail?.type === "pattern" && (
              <AlertaCampo>Ingrese un mail valido</AlertaCampo>
            )}
            <LabelForm>Mensaje</LabelForm>
            <TextArea
              name="message"
              placeholder="Escribe tu mensaje aqui..."
              cols="200"
              {...register("message", { required: true, minLength: 10 })}
            ></TextArea>



            {errors.message?.type === "required" && (
              <AlertaCampo>Ingrese un mensaje</AlertaCampo>
            )}{" "}
            {errors.message?.type === "minLength" && (
              <AlertaCampo>
                Ingrese un mensaje de mas de 10 caracter
              </AlertaCampo>
            )}
            <ButtonSend type="submit">ENVIAR</ButtonSend>
            
          </Form>
        </ContactForm>
      </ContactWrapper>
      <ToastContainer />
    </ContactContainer>
  );
};

export default Contacto;
