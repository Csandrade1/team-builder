import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import Form from "./Form";

const initialFormValues = {
  name: "",
  email: "",
  role: "",
};

function App() {
  const [members, setMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  };

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };
  };

  useEffect(() => {});

  return (
    <div className="container">
      <h1>Team Member Form</h1>

      <Form values={formValues} update={updateForm} submit={submitForm} />

      {members.map((member) => {
        return <Form />;
      })}
    </div>
  );
}

export default App;
