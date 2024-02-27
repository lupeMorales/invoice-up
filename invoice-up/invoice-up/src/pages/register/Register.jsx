import { Button } from "../../components/atoms/buttons/Button";
import { RegisterStyled } from "./RegisterStyled";
import image from "../../assets/welcome.png";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Register = () => {
  /*   const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); */
  const [formIsSend, setFormIsSend] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (ev) => {
    const { name, value } = ev.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setFormIsSend(true);
    console.log("Genial, tu cuenta ha sido creada");
    console.log("Data:", form);
    setForm({
      username: "",
      email: "",
      password: "",
    });
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
              value={form.username}
              onChange={handleInputChange}
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
              value={form.email}
              onChange={handleInputChange}
              required
            ></input>
          </label>
          <label htmlFor="password">
            Contraseña
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleInputChange}
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
