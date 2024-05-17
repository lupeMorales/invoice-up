import { PreviewerStyled } from "./PreviewerStyled";

// eslint-disable-next-line react/prop-types

export const Previewer = ({ dataForm }) => {
  //dataForm has been sended by dashboard
  return (
    <>
      {dataForm.map((data) => {
        return (
          <div key={data.id}>
            <p>{data.myName}</p>
          </div>
        );
      })}
    </>
  );
};
