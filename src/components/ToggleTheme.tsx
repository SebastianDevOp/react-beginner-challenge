import "./ToggleTheme.css";
import { useState } from "react";

// ## Challenge 4 — Toggle theme *(medium)*

// **Goal:** derived class names and boolean state.

// Create a `ThemeToggle` component with a button that switches between "light" and "dark".
// When dark, the component's root `<div>` should have class `dark`. When light, class `light`.

// Add `ThemeToggle.css` with:

// ```css
// .dark  { background: #111; color: #fff; padding: 1rem; }
// .light { background: #fff; color: #111; padding: 1rem; }
// ```

// Use `useState<boolean>` for the mode. Button text must flip (`"Switch to dark"` / `"Switch to light"`).

export const ToggleTheme = () => {
  const [theme, setTheme] = useState<boolean>(false);

  return (
    <>
      <div>
        <button
          className={theme ? "dark" : "light"}
          onClick={() => setTheme(!theme)}
        >
          {theme ? "Switch to Light" : "Switch to Dark"}
        </button>
      </div>
    </>
  );
};
