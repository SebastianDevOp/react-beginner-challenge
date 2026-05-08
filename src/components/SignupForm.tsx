import useForm from "../hooks/useForm";
import "./SignupForm.css";
import { useState } from "react";

// ### Part B — the form component

// Create `src/components/SignupForm.tsx` using the hook. It must have:

// - Three inputs: `name`, `email` (type=email), `password` (type=password).
// - Each input wired with `name`, `value`, `onChange`, `onBlur`.
// - Under each input, show the error message **only if** that field has been touched.
// - A "Submit" button, and a "Reset" button.
// - On successful submit, show a `"Account created"` message below the form (color `#16a34a`).

// ### Stretch

// - Disable the submit button while `errors` is non-empty.
// - Add a `confirmPassword` field that must match `password`.
// - Make `handleChange`/`handleBlur` work for `<textarea>` and `<select>` too (widen the event type).

// ---

// Usage in a component:

// ```ts
// const form = useForm({
//   initialValues: { name: '', email: '', password: '' },
//   validate: (values) => {
//     const errors: Errors<typeof values> = {}
//     if (!values.name) errors.name = 'Name required'
//     if (!values.email.includes('@')) errors.email = 'Invalid email'
//     if (values.password.length < 8) errors.password = 'Min 8 characters'
//     return errors
//   },
//   onSubmit: (values) => { console.log('submit', values) },
// })
// ```

export const SignupForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
  } = useForm({
    initialValue: { name: "", email: "", password: "", confirmPassword: "" },
    validate: (values) => {
      const errors: Errors<typeof values> = {};
      if (!values.name) errors.name = "Name required";
      if (!values.email.includes("@")) errors.email = "Invalid email";
      if (values.password.length < 8) errors.password = "Min 8 characters";
      if (values.password !== values.confirmPassword)
        errors.confirmPassword = "Passwords dont match";
      return errors;
    },
    onSubmit: (values) => {
      console.log("submit", values);
      setSubmitted(true);
    },
  });

  const noError = Object.keys(errors).length === 0;
  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={values.name}
          placeholder="Name"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.name && errors.name && (
          <span className="error-text">{errors.name}</span>
        )}
        <input
          type="email"
          name="email"
          value={values.email}
          placeholder="Email"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.email && errors.email && (
          <span className="error-text">{errors.email}</span>
        )}
        <input
          type="password"
          name="password"
          value={values.password}
          placeholder="Password"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.password && errors.password && (
          <span className="error-text">{errors.password}</span>
        )}
        <input
          type="password"
          name="confirmPassword"
          value={values.confirmPassword}
          placeholder="Bestätige Passwort"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.confirmPassword && errors.confirmPassword && (
          <span className="error-text">{errors.confirmPassword}</span>
        )}
        {noError && <button type="submit">Submit</button>}

        <button type="button" onClick={reset}>
          Reset
        </button>
      </form>
      {submitted && <p style={{ color: "#16a34a" }}>Account created!</p>}
    </>
  );
};
