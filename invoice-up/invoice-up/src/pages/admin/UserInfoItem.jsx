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
        const response = await axios.get("http://127.0.0.1:8000/api/users", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Utiliza el token de autenticación
          },
        });
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
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="container-edit">
        <Button action="Borrar"></Button>
      </div>
      {error && <div className="error">{error}</div>}
    </UserInfoItemStyled>
  );
};
