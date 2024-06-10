import { LoginStyled } from "./LoginStyled";
import image from "../../assets/community.png";
import { Button } from "../../components/atoms/buttons/Button";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Header } from "../../components/layout/header/Header";

export const Login = () => {
  const navigate = useNavigate();
  const [formIsSend, setFormIsSend] = useState(false);

  const [form, setForm] = useState({
    mail: "",
    password: "",
  });

  const handleInputChange = (ev) => {
    const { name, value } = ev.target;
    setForm({ ...form, [name]: value });
  };

 const handleSubmit = async (ev) => {
      ev.preventDefault();
      try {
        const response = await axios.post("http://127.0.0.1:8000/api/login", form);
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          navigate("/");
        }
      } catch (error) {
        console.error("Login failed:", error);
      }

      setForm({
        mail: "",
        password: "",
      })
    };
  
    localStorage.setItem("user", JSON.stringify(form));

    //navigate to dashboard
    navigate("/dashboard");
  };
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
