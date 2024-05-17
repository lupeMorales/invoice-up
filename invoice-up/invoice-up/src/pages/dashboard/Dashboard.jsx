import { useState } from "react";
import { FormMyDatas } from "../../components/forms/FormMyDatas";
import { HeaderDashboard } from "../../components/layout/header/HeaderDashboard";
import { Previewer } from "../../components/layout/previewer/Previewer";
import { DashboardForm } from "../../components/molecules/form/DashboardForm";
import { DashboardWrapper } from "./DashboardWrapper";
import { DashboardFormWrapper } from "./DashboardFormWrapper";

export const Dashboard = () => {
  const [dataForm, setDataForm] = useState(dataForm());

  //Info is recived by FormMyData
  //keep info in dataForm to send info by Form props
  const createInvoice = (ev) => {
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
          <DashboardForm createInvoice={createInvoice}></DashboardForm>
        </DashboardFormWrapper>

        <Previewer dataForm={dataForm}></Previewer>
      </DashboardWrapper>
    </>
  );
};
