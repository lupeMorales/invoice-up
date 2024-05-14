import { useState } from "react";
import { FormMyDatas } from "../../components/forms/FormMyDatas";
import { HeaderDashboard } from "../../components/layout/header/HeaderDashboard";
import { Previewer } from "../../components/layout/previewer/Previewer";
import { DashboardForm } from "../../components/molecules/form/DashboardForm";
import { DashboardWrapper } from "./DashboardWrapper";
import { DashboardFormWrapper } from "./DashboardFormWrapper";

export const Dashboard = () => {
  const [dataForm, setDataForm] = useState([]);

  //Info is recived by FormMyData
  //keep info in dataForm to send info by Form props
  const handleSubmit = (ev) => {
    console.log("say hello!");
    console.log({ ev });
    setDataForm([...dataForm, ev]);
  };
  return (
    <>
      <HeaderDashboard />
      <DashboardWrapper>
        <DashboardFormWrapper>
          {" "}
          <DashboardForm onSubmit={handleSubmit}></DashboardForm>
        </DashboardFormWrapper>

        <Previewer></Previewer>
      </DashboardWrapper>
    </>
  );
};
