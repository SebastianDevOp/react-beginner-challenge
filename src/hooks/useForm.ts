import React, { useState } from "react";

// ## Challenge 9 — Form with `useForm` custom hook *(hard)*

// **Goal:** combine everything. Build a reusable, generic form hook.

// ### Part A — the hook

// Create `src/hooks/useForm.ts` exporting `useForm`. Signature:

// ```ts
// type Errors<T>  = Partial<Record<keyof T, string>>
// type Touched<T> = Partial<Record<keyof T, boolean>>

// type UseFormOptions<T> = {
//   initialValues: T
//   validate:     (values: T) => Errors<T>
//   onSubmit:     (values: T) => void
// }

// type UseFormResult<T> = {
//   values:       T
//   errors:       Errors<T>
//   touched:      Touched<T>
//   handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
//   handleBlur:   (e: React.FocusEvent<HTMLInputElement>)  => void
//   handleSubmit: (e: React.FormEvent<HTMLFormElement>)    => void
//   reset:        () => void
// }

// function useForm<T extends Record<string, string>>(
//   options: UseFormOptions<T>
// ): UseFormResult<T>
// ```

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

// Requirements:

// - `values` is held in `useState<T>(initialValues)`. `touched` is held
// in `useState<Touched<T>>({})`.
// - `errors` is **derived**, not stored in state — compute inline each
// render: `const errors = validate(values)`. Do not put it in `useState`.
// - `handleChange` updates the field matching `e.target.name`
// (cast `name` to `keyof T`).
// - `handleBlur` marks that field as touched.
// - `handleSubmit` must `preventDefault` and mark all fields touched.
// Derive the touched-all map from the keys of `values`, e.g.
//  `Object.keys(values).reduce((acc, k) => ({ ...acc, [k]: true }), {})`.
// - `handleSubmit` calls `onSubmit(values)` **only if** `errors` has no
//  keys (`Object.keys(errors).length === 0`).
// - `reset()` restores `initialValues` and clears `touched`.

type Errors<T> = Partial<Record<keyof T, string>>;

type Touched<T> = Partial<Record<keyof T, boolean>>;

type UseFormOptions<T> = {
  initialValue: T;
  validate: (values: T) => Errors<T>;
  onSubmit: (values: T) => void;
};

type UseFormResult<T> = {
  values: T;
  errors: Errors<T>;
  touched: Touched<T>;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
  handleBlur: (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  reset: () => void;
};

export default function useForm<T extends Record<string, string>>(
  options: UseFormOptions<T>,
): UseFormResult<T> {
  const [values, setValues] = useState<T>(options.initialValue);
  const [touched, setTouched] = useState<Touched<T>>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const name: keyof T = e.target.name;
    console.log(name);
    const value = e.target.value;
    console.log(value);

    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const name: keyof T = e.target.name;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };
  const errors: Errors<T> = options.validate(values);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const allTouched = Object.keys(values).reduce(
      (acc, k) => ({
        ...acc,
        [k]: true,
      }),
      {},
    );

    setTouched(allTouched);

    const noError = Object.keys(errors).length;

    if (noError === 0) {
      options.onSubmit(values);
    } else {
      alert("Eingaben sind Fehlerhaft");
    }
  };

  const reset = () => {
    setValues(options.initialValue);
    setTouched({});
  };

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
  };
}
