import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import states from "./constants";

const initailForm = {
  name: "",
  description: "",
  estimate: null,
  stateId: "1",
  id: null,
};

const CrudForm = ({ addTask, updateData, setDataToEdit, dataToEdit }) => {
  const [form, setForm] = useState(initailForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initailForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.description || !form.estimate || !form.stateId) {
      alert("Complete data");
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
          type="number"
          name="estimate"
          placeholder="Estimate"
          onChange={handleChange}
          value={form.estimate}
        />
        <select value={form.stateId} name="stateId" onChange={handleChange}>
          {states.map((option) => (
            <option key={option.id} value={option.id}>
              {option.description}
            </option>
          ))}
        </select>

        <Button type="submit" variant="primary">
          Enviar
        </Button>
        <Button onClick={handleReset} variant="secondary">
          Limpiar
        </Button>
      </form>
    </div>
  );
};

Form.propTypes = {};

export default CrudForm;
