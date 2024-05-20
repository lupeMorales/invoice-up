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
import { ProtectedRoute } from "./utils/ProtectedRoute";

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
