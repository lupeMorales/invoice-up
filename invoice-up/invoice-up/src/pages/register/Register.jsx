import axios from "axios";
import { Button } from "../../components/atoms/buttons/Button";
import { RegisterStyled } from "./RegisterStyled";
import image from "../../assets/welcome.png";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Header } from "../../components/layout/header/Header";

export const Register = () => {
  const navigate = useNavigate();
  const [formIsSend, setFormIsSend] = useState(false);
  const [form, setForm] = useState({
    name: "",
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

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setFormIsSend(true);
    console.log("Genial, tu cuenta ha sido creada");
    console.log("Data:", form);

    try {
      // Realizar la llamada Axios para enviar datos al servidor

      const response = await axios.post(
        "http://127.0.0.1:8000/api/register",
        form
      );
      // Verifica si existe un token en la respuesta de la API
      if (response.data.data.token) {
        // Si hay un token, almacénalo en el localStorage del navegador
        localStorage.setItem("token", response.data.data.token);

        // Redirige al usuario a la página principal
        return navigate("/");
      }

      console.log("Respuesta del servidor:", response.data);
    } catch (error) {
      // Manejar errores en la llamada Axios
      console.error("Error al enviar datos:", error);
    }

    //reset form
    setForm({
      name: "",
      email: "",
      password: "",
    });
    //  navigate("/login");
  };

  return (
    <>
      <Header></Header>
      <RegisterStyled>
        <div>
          <img src={image} alt="" />
          <form onSubmit={handleSubmit}>
            {" "}
            <h1>Welcome</h1>
            <h3>Nos alegra tenerte a bordo</h3>
            <label htmlFor="name">
              Nombre de usuario
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
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
    </>
  );
};
