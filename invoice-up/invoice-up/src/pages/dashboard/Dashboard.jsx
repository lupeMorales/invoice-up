import { useState } from "react";
import { FormMyDatas } from "../../components/forms/FormMyDatas";
import { HeaderDashboard } from "../../components/layout/header/HeaderDashboard";
import { Previewer } from "../../components/layout/previewer/Previewer";
import { Form } from "../../components/molecules/form/Form";

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
      <h1>Bienvenido a tu dashboard</h1>
      <Form onSubmit={handleSubmit}></Form>
      {/*     <FormMyDatas onSubmit={handleSubmit}></FormMyDatas> */}
      <Previewer dataForm={dataForm}></Previewer>
    </>
  );
};
