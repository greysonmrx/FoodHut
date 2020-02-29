import React, { useRef, useState } from "react";
import { Form } from "@unform/web";
import * as Yup from "yup";
import { IoIosMail, IoMdKey } from "react-icons/io";

import Input from "../../components/Input";
import Button from "../../components/Button";

import Logo from "../../assets/foodhut-logo.png";

export default function SignIn() {
  const formRef = useRef(null);
  const [disable, setDisable] = useState(true);

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email("Insira um e-mail válido")
          .required("O e-mail é obrigatório"),
        password: Yup.string()
          .min(6, "A senha deve ter no mínimo 6 caracteres")
          .required("A senha é obrigatória")
      });

      await schema.validate(data, {
        abortEarly: false
      });

      formRef.current.setErrors({});
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }
  }

  function handleDisableButton() {
    const { value: email } = formRef.current.getFieldRef("email");
    const { value: password } = formRef.current.getFieldRef("password");

    setDisable(!email || password.length < 6);
  }

  return (
    <>
      <img src={Logo} alt="FoodHut" />

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          Icon={IoIosMail}
          type="text"
          placeholder="Digite seu e-mail"
          name="email"
          onChange={handleDisableButton}
        />
        <Input
          Icon={IoMdKey}
          type="password"
          placeholder="Digite sua senha"
          name="password"
          onChange={handleDisableButton}
        />

        <Button isDisabled={disable} type="submit">
          Enviar
        </Button>
      </Form>
    </>
  );
}
