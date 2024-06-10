import React, { useState } from "react";
import GlobalStyle from "./GlobalStyle";
import ReactDOM from "react-dom/client";
import {
  Form,
  Link,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Theme from "./Theme";
import { Home } from "./pages/Home";
import { Page404 } from "./pages/Page404";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { CalculatorPage } from "./pages/calculator/CalculatorPage";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { MyInvoices } from "./pages/myInvoices/MyInvoices";
import { ProtectedRoute } from "./utils/ProtectedRoute";
import axios from "axios";

/* export const main = () => {
  const [user, setUser] = useState([]);
  const handleFormSubmit = (ev) => {
    setUser([...user, ev]);
  };
  return (
    <>
      <Form onSubmit={handleFormSubmit} />
    </>
  );
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
    path: "calculadora-de-autonomos",
    element: <CalculatorPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "mis-facturas",
    element: <MyInvoices />,
  },

  /*{
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/my-invoices",
        element: <MyInvoices />,
      },
    ],
  },*/

  {
    path: "*",
    element: <Page404 />,
  },
]);

// Intercepta las solicitudes antes de ser enviadas y modifica la configuración de la solicitud
axios.interceptors.request.use((config) => {
  // Obtiene el token de autenticación almacenado en el localStorage del navegador
  const authToken = localStorage.getItem("token");

  // Verifica si hay un token de autenticación
  if (authToken) {
    // Si hay un token, agrega el encabezado de autorización a la configuración de la solicitud
    config.headers.Authorization = `Bearer ${authToken}`;
  }

  // Devuelve la configuración de la solicitud modificada
  return config;
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Theme>
      <GlobalStyle />
      <RouterProvider router={router} />
      <GlobalStyle />
    </Theme>
  </React.StrictMode>
);
