import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

// con esto validamos si el usuario esta o no autenticado
export const ProtectedRoute = () => {
  const [isAuth, setIsAuth] = useState(false);
  return isAuth ? <Outlet /> : <Navigate to="/register" replace />;
};

// si isAuth es true nos mostrará lo que hay de trñas de Outlet que en este caso es el DashBoard, de lo contrario mostrará el dformulario de registro
// en un futuro si es false o true lo determinará la respuesta del backend
