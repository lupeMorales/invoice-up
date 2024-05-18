import { PreviewerStyled } from "./PreviewerStyled";

// eslint-disable-next-line react/prop-types

export const Previewer = ({ dataForm }) => {
  //dataForm has been sended by dashboard

  console.log("dataForm", dataForm);
  console.log("nombre del emisor", dataForm.myName);
  return (
    <>
      <PreviewerStyled>
        <h2>soy el preview</h2>
        <p> {dataForm.myName || `Nombre Apellido`}</p>
        <p> {dataForm.myPhone || "615454545"}</p>
      </PreviewerStyled>

      {/*  {dataForm.map((data) => {
        return (
          <div key={data.id}>
            <p>{data.myName}</p>
          </div>
        );
      })} */}
    </>
  );
};
