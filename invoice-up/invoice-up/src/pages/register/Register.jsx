import image from "../../assets/welcome.png";
import { Button } from "../../components/atoms/buttons/Button";
import { RegisterStyled } from "./RegisterStyled";

export const Register = () => {
  return (
    <RegisterStyled>
      <div>
        <img src={image} alt="" />
        <form action="">
          {" "}
          <h1>Wellcome</h1>
          <h3>Nos alegra tenerte a bordo</h3>
          <label htmlFor="username">
            Nombre de usuario
            <input type="username" id="username" name="username"></input>
          </label>
          <label htmlFor="mail">
            Email
            <input
              type="email"
              id="mail"
              name="mail"
              placeholder="email@email.com"
            ></input>
          </label>
          <label htmlFor="password">
            Contraseña
            <input type="password" id="password" name="password"></input>
          </label>
          <Button action="Crear cuenta"></Button>
          <Button action="Log in" variant="outline"></Button>
        </form>
      </div>
    </RegisterStyled>
  );
};
