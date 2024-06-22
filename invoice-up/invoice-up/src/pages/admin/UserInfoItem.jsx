import { UserInfoItemStyled } from "./UserInfoItemStyled";
import { Button } from "./../../components/atoms/buttons/Button";
import { useState, useEffect } from "react";
import axios from "axios";

export const UserInfoItem = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://guadalupe.v1-22.proyectosdwa.es/api2/public/api/users",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`, // Utiliza el token de autenticación
            },
          }
        );
        setUsers(response.data);
      } catch (error) {
        setError("Error al obtener la lista de usuarios");
        console.error("Error al obtener la lista de usuarios:", error);
      }
    };
    fetchUsers();
  }, []);
  return (
    <UserInfoItemStyled>
      <h2>Usuarios</h2>
      {error && <div className="error">{error}</div>}
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <div className="container-edit">
                  <Button action="Eliminar usuario"></Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </UserInfoItemStyled>
  );
};
