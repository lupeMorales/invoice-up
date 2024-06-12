import { LoginStyled } from "./LoginStyled";
import image from "../../assets/community.png";
import { Button } from "../../components/atoms/buttons/Button";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Header } from "../../components/layout/header/Header";
import axios from "axios";

export const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (ev) => {
    const { name, value } = ev.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    console.log("Hola de nuevo");
    console.log("Data:", form);
    try {
      //envio datos al servidos
      const response = await axios.post(
        "http://127.0.0.1:8000/api/login",
        form
      );
      console.log(response.data);
      // verifica si existe el token
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
        console.log("Token exists:", response.data.token);
        console.log("response:", response);
      }

      // maneja respuesta del servidor
    } catch (error) {
      console.error("Login failed:", error);
      if (error.response) {
        // El servidor respondió con un código de estado que no está en el rango de 2xx
        console.error("Error response data:", error.response.data);
        console.error("Error response status:", error.response.status);
        console.error("Error response headers:", error.response.headers);
      } else if (error.request) {
        // La solicitud fue hecha pero no se recibió respuesta
        console.error("Error request:", error.request);
      } else {
        // Algo pasó al preparar la solicitud que desencadenó un error
        console.error("Error message:", error.message);
      }
    }
    setForm({
      email: "",
      password: "",
    });
  };

  /*     localStorage.setItem("user", JSON.stringify(form));

    //navigate to dashboard
    navigate("/dashboard"); */

  return (
    <>
      <Header></Header>
      <LoginStyled>
        <div>
          <img src={image} alt="peopele conected" />
          <form onSubmit={handleSubmit}>
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
                value={form.mail}
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
            <Button action="Iniciar sesión"></Button>
            <Link to="/register">
              {" "}
              <Button action="Crear cuenta" variant="outline"></Button>
            </Link>
          </form>
        </div>
      </LoginStyled>
    </>
  );
};
