export const DatosDelEmisor = (props) => {
  const handleCollapsable = (ev) => {
    props.handleCollapsable(ev.currentTarget.id);
    props.handleClickCollapsed();
  };

  const handleChange = (ev) => {
    const inputValue = ev.target.value;
    const inputName = ev.target.name;
    props.handleChange(inputValue, inputName);
  };
  console.log(props.dataInvoice);
  return (
    <>
      <h2>Datos del Emisor</h2>
      <fieldset>
        <section onClick={handleCollapsable} id="emisor">
          <h2>Datos del Emisor</h2>
          <input
            type="text"
            name="myName"
            id="myName"
            placeholder="nombre de emisor"
            value={props.dataInvoice.myName}
            onChange={handleChange}
            aria-label="nombre del emisor"
          />
          <input
            type="text"
            name="myAddress"
            id="myAddress"
            placeholder="dirección"
            value={props.dataInvoice.myAddress}
            onChange={handleChange}
            aria-label="dirección del emisor"
          />
          <div className="input-group">
            <input
              type="number"
              name="myPhone"
              id="myPhone"
              placeholder="Teléfono"
              value={props.dataInvoice.myPhone}
              onChange={handleChange}
              aria-label="teléfono del emisor"
            />
            <input
              type="text"
              name="myCif"
              id="myCif"
              placeholder="cif"
              value={props.dataInvoice.myCif}
              onChange={handleChange}
              aria-label="cif del emisor"
            />
          </div>
          <input
            type="myEmail"
            name="myEmail"
            id="email"
            placeholder="tuemail@rmail.com"
            value={props.dataInvoice.myEmail}
            onChange={handleChange}
            aria-label="email del emisor"
          />
        </section>
      </fieldset>
    </>
  );
};
