import React from "react";
import GlobalStyle from "./GlobalStyle";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Theme from "./Theme";
import { Home } from "./pages/Home";
import { Page404 } from "./pages/Page404";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { CalculatorPage } from "./pages/calculator/CalculatorPage";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { MyInvoices } from "./pages/myInvoices/MyInvoices";

import axios from "axios";
import { UserProvider } from "./context/UserContext";

import { LegalPage } from "./pages/legal/LegalPage";
import { AvisoLegal } from "./pages/legal/AvisoLegal";

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
    path: "aviso-legal",
    element: <LegalPage page="aviso-legal" />,
  },
  {
    path: "politica-cookies",
    element: <LegalPage page="politica-cookies" />,
  },
  {
    path: "politica-privacidad",
    element: <LegalPage page="politica-privacidad" />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  /*  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "mis-facturas",
    element: <MyInvoices />,
  }, */

  /*   {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  }, */
  /*   {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/mis-facturas",
        element: <MyInvoices />,
      },
    ],
  }, */
  {
    path: "mis-facturas",
    element: <MyInvoices />,
  },
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
    <UserProvider>
      {/* con esto puedo usar el useContext */}
      <Theme>
        <GlobalStyle />
        <RouterProvider router={router} />
        <GlobalStyle />
      </Theme>
    </UserProvider>
  </React.StrictMode>
);
