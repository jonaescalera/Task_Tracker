import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const initailForm = {
  name: "",
  description: "",
  estimate: "",
  stateId: 1,
  id: null,
};

const Form = ({ data, addTask, updateData, setDataToEdit, dataToEdit }) => {
  const [form, setForm] = useState(initailForm);
  console.log(data);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initailForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    const value =
      e.currentTarget.type === "text"
        ? e.target.value
        : parseInt(e.target.value);
    setForm({
      ...form,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.description || !form.estimate || !form.stateId) {
      alert("Datos incompletos");
      return;
    }

    if (form.id === null) {
      addTask(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setForm(initailForm);
    setDataToEdit(null);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={form.name}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          onChange={handleChange}
          value={form.description}
        />
        <input
          type="text"
          name="estimate"
          placeholder="Estimate"
          onChange={handleChange}
          value={form.estimate}
        />
        <select value={form.stateId} name="stateId" onChange={handleChange}>
          {data.map((option) => (
            <option key={option.id} value={option.id}>
              {option.description}
            </option>
          ))}
        </select>
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

Form.propTypes = {};

export default Form;
