import "./Button.css";

// ## Challenge 1 — Button component *(easy)*

// **Goal:** learn JSX, props, and basic CSS.

// Create `src/components/Button.tsx` exporting a `Button` component. It should:

// - Accept a `label` prop (string) and render it as the button text.
// - Accept an `onClick` prop (`() => void`) and wire it to the button's `onClick`.
// - Declare a `ButtonProps` type for the props.
// - Have a CSS file `Button.css` with: padding, rounded corners, a background color, a hover color, and a pointer cursor.

// Render two buttons in `App.tsx` with different labels. At least one should `alert("clicked")` on click.

type ButtonProps = {
  label: string;
  onClick: () => void;
};

export const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <>
      <button className="btn" onClick={onClick}>
        {label}
      </button>
    </>
  );
};
