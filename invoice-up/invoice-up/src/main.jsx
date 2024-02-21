import React from "react";
import GlobalStyle from "./GlobalStyle";
import ReactDOM from "react-dom/client";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import Theme from "./Theme";
import { Home } from "./pages/Home";
import { Page404 } from "./pages/Page404";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";

/* const theme = {
  color: {
    primary: "#6c63ff",
    secondary: "#4f49cc",
    accent: "#F78B38",
    light_text: "#fff",
    dack_text: "#000",
  },
  fontSize: {
    xlarge: "32px",
    large: "28px",
    normal: "22px",
    small: "18px",
  },
  fonts: {
    titleFont: "Comfortaa, sans-serif",
    textFont: "Lato, sans-serif",
  },
}; */

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Home />
      </div>
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Theme>
      <GlobalStyle />
      <RouterProvider router={router} />
      <GlobalStyle />
    </Theme>
  </React.StrictMode>
);
