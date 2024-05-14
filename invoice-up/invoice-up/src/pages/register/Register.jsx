import { Button } from "../../components/atoms/buttons/Button";
import { RegisterStyled } from "./RegisterStyled";
import image from "../../assets/welcome.png";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
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
    //reset form
    setForm({
      username: "",
      email: "",
      password: "",
    });
    navigate("/login");
  };

  return (
    <RegisterStyled>
      <div>
        <img src={image} alt="" />
        <form onSubmit={handleSubmit}>
          {" "}
          <h1>Welcome</h1>
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
