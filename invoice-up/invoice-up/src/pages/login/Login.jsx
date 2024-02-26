import { LoginStyled } from "./LoginStyled";
import image from "../../assets/community.png";
import { Button } from "../../components/atoms/buttons/Button";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

export const Login = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleForm = (ev) => {
    ev.preventDefault();
    console.log("Formulario de logueo enviado");
    console.log("mail", mail);
    console.log("password", password);
    navigate("/dashboard");
  };
  return (
    <LoginStyled>
      <div>
        <img src={image} alt="peopele conected" />
        <form onSubmit={handleForm}>
          {" "}
          <h1>Hola de nuevo</h1>
          <h3>Nos alegra verte otra vez</h3>
          <label htmlFor="mail">
            Email
            <input
              type="email"
              id="mail"
              name="mail"
              placeholder="email@email.com"
              value={mail}
              onChange={(ev) => setMail(ev.target.value)}
              required
            ></input>
          </label>
          <label htmlFor="password">
            Contraseña
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
              required
            ></input>
          </label>
          <Button action="Iniciar sesión"></Button>
          <Link to="/register">
            {" "}
            <Button action="Crear cuenta" variant="outline"></Button>
          </Link>
        </form>
      </div>
    </LoginStyled>
  );
};
