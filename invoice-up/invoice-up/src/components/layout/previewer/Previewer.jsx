// eslint-disable-next-line react/prop-types
export const Previewer = ({ dataForm }) => {
  //dataForm has been sended by dashboard
  return (
    <>
      {dataForm.map((item) => {
        return (
          <>
            <h1>{item.name}</h1>
            <p>{item.adress}</p>
            <p>{item.phone}</p>
            <p>{item.email}</p>
            <h2>{item.name2}</h2>
            <p>{item.adress2}</p>
            <p>{item.phone2}</p>
            <p>{item.email2}</p>
          </>
        );
      })}
    </>
  );
};
