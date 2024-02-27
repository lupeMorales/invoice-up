export const FormEjemplo = ({ onSubmit }) => {
  const [form, setForm] = useState({});

  //el formulario llama a handle submit y handle submit llamará a backend o a localStorage
  const handleSubmit = (ev) => {
    ev.preventDefault();
    onSubmit(form);
  };
  const handleChange = (ev) => {
    const { value, name } = ev.target;
    setForm({
      ...setForm,
      [name]: value,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input type="text" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="">email</label>
        <input type="email" onChange={handleChange} />
      </div>
    </form>
  );
};
