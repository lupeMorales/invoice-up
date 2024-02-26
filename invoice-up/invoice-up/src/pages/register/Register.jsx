import { Button } from "../../components/atoms/buttons/Button";
import { RegisterStyled } from "./RegisterStyled";
import image from "../../assets/welcome.png";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log("Genial, tu cuenta ha sido creada");
    console.log("User:", username);
    console.log("mail:", mail);
    console.log("password:", password);
  };

  return (
    <RegisterStyled>
      <div>
        <img src={image} alt="" />
        <form onSubmit={handleSubmit}>
          {" "}
          <h1>Wellcome</h1>
          <h3>Nos alegra tenerte a bordo</h3>
          <label htmlFor="username">
            Nombre de usuario
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(ev) => setUsername(ev.target.value)}
              required
            ></input>
          </label>
          <label htmlFor="email">
            Email
            <input
              type="email"
              id="email"
              name="email"
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
          <Button action="Crear cuenta"></Button>
          <Link to="/login">
            {" "}
            <Button action="Log in" variant="outline"></Button>
          </Link>
        </form>
      </div>
    </RegisterStyled>
  );
};
