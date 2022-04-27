import React from "react";

export default function Form(props) {
  const { values, update, submit } = props;

  const onChange = (evt) => {
    const name = evt.target.name;
    const { value } = evt.target;
    update(name, value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <form className="form container">
      <div className="form-group inputs">
        <label>
          Name
          <input
            type="text"
            name="name"
            placeholder="Type a name"
            value={values.name}
            onChange={onChange}
          />
        </label>
        <label>
          Email
          <input
            type="text"
            name="email"
            placeholder="Type an email"
            value={values.email}
            onChange={onChange}
          />
        </label>
        <label>
          Role
          <select value={values.role} name="role" onChange={onChange}>
            <option value="">-- Select a Role --</option>
            <option value="backend engineer">Backend Engineer</option>
            <option value="frontend engineer">Frontend Engineer</option>
            <option value="designer">Designer</option>
          </select>
        </label>

        <div className="submit">
          <button>submit</button>
        </div>
      </div>
    </form>
  );
}
