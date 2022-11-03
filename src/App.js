import { useState } from "react";
import "./index.css";

function App() {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
  };
  const [values, setValues] = useState(initialState);
  const [submit, setSubmit] = useState(false);

  const disable =
    values.firstName === "" || values.lastName === "" || values.email === "";

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);

    setTimeout(() => {
      setSubmit(false);
      setValues(initialState);
    }, 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <div>
      <div className="form">
        <form className="register-form" onSubmit={handleSubmit}>
          {submit && (
            <div className="success">
              Success! Thank you for Registering 😁.
            </div>
          )}
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="input-field"
            placeholder="First Name"
            value={values.firstName}
            onChange={handleChange}
          />

          <input
            type="text"
            id="lastName"
            name="lastName"
            className="input-field"
            placeholder="Last Name"
            value={values.lastName}
            onChange={handleChange}
          />

          <input
            type="text"
            id="email"
            name="email"
            className="input-field"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
          />

          <button className="input-field" disabled={disable}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
