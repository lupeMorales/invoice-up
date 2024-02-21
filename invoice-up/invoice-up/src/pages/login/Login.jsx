import { LoginStyled } from "./LoginStyled";
import image from "../../assets/community.png";
import { Button } from "../../components/atoms/buttons/Button";
export const Login = () => {
  return (
    <LoginStyled>
      <div>
        <img src={image} alt="" />
        <form action="">
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
            ></input>
          </label>
          <label htmlFor="password">
            Contraseña
            <input type="password" id="password" name="password"></input>
          </label>
          <Button action="iniciar sesión"></Button>
          <Button action="crear cuenta" variant="outline"></Button>
        </form>
      </div>
    </LoginStyled>
  );
};
