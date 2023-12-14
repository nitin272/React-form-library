import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [field, setField] = useState();
  const [submitted, setSubmit] = useState(false);

  const onSubmit = (data) => {
    setField(data);
    setSubmit(true);
  };

  return (
    <div className={`form ${submitted ? "success-mess" : ""}`}>
      <form className="register" onSubmit={handleSubmit(onSubmit)}>
        {submitted ? (
          <div className="success-mess">Registration successful!</div>
        ) : null}

        <input
          id="first-name"
          className={`form-entry ${errors.firstName ? "error" : ""}`}
          type="text"
          placeholder="First Name"
          {...register("firstName", { required: "First Name is required!" })}
        />

        <span>{errors.firstName?.message}</span>

        <input
          id="last-name"
          className={`form-entry ${errors.lastName ? "error" : ""}`}
          type="text"
          placeholder="Last Name"
          {...register("lastName", { required: "Last Name is required!" })}
        />

        <span>{errors.lastName?.message}</span>

        <input
          id="email"
          className={`form-entry ${errors.email ? "error" : ""}`}
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Email is required!",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email",
            },
          })}
        />

        <span>{errors.email?.message}</span>

        <input
          id="Password"
          className={`form-entry ${errors.password ? "error" : ""}`}
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Password is required!",
            minLength: { value: 4, message: "Password must be more than 4 characters" },
            maxLength: { value: 20, message: "Password cannot be more than 20 characters" },
          })}
        />

        <span>{errors.password?.message}</span>

        <button className="form-entry" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
