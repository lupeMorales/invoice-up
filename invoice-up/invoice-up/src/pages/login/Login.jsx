import axios from "axios";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginStyled } from "./LoginStyled.js";
import image from "../../assets/community.png";
import { Button } from "../../components/atoms/buttons/Button";
import { Header } from "../../components/layout/header/Header";
import { UserContext } from "../../context/UserContext.jsx"; // Importa el contexto del usuario

axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Accept"] = "application/json";

export const Login = () => {
  const { setUser } = useContext(UserContext); // Usa el contexto del usuario
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState("");

  const handleInputChange = (ev) => {
    const { name, value } = ev.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setErrors("");
    // Validar formulario
    if (form.password.length < 8) {
      setErrors("La contraseña debe tener al menos 8 caracteres.");
      return;
    }

    try {
      console.log("ha entrado en el try");
      //envio datos al servidos
      const response = await axios.post(
        "http://127.0.0.1:8000/api/login",

        form
      );
      console.log("response login", response);
      console.log("token", response.data.token);

      // verifica si existe el token
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        // Guardar el usuario en el contexto de autenticación
        setUser(response.data.name);

        console.log("Token exists:", response.data.token);
        console.log("response:", response);
        return navigate("/dashboard");
      }

      // maneja respuesta del servidor
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setErrors("Credenciales inválidas. Por favor, inténtalo de nuevo.");
      } else {
        setErrors(
          "Ocurrió un error al iniciar sesión. Vuelve a intentarlo más tarde."
        );
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
            {errors && (
              <p style={{ color: "red", fontSize: "16px" }}>{errors}</p>
            )}
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
