import useLocalStorage from "../hooks/useLocalStorage";

// Use it inside a small component
//  (`src/components/DraftInput.tsx`):
// a text input whose value survives page refresh
// (`useLocalStorage<string>('draft', '')`).

export const DraftInput = () => {
  const [input, setInput] = useLocalStorage<string>("draft", "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <>
      <input
        className="input"
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Schreibe etwas.."
      />
    </>
  );
};
