import { Heading } from "./../../components/molecules/Heading";
import { AdminWrapperStyled } from "./AdminWrapperStyled";
import { UserInfoItem } from "./UserInfoItem";

export const AdminWrapper = () => {
  return (
    <AdminWrapperStyled>
      <Heading
        align="start"
        title="Panel de administrador"
        subtitle="Gestión de usuarios"
      ></Heading>
      <UserInfoItem></UserInfoItem>
    </AdminWrapperStyled>
  );
};
