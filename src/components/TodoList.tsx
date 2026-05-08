import "./TodoList.css";
import { useState } from "react";

// ## Challenge 5 — Todo list *(medium)*

// **Goal:** arrays in state, lists in JSX, input handling.

// Build a `TodoList` component:

// - Define `type Todo = { id: string; text: string }`.
// - An input field + "Add" button at the top.
// - Typing and clicking Add (or pressing Enter) appends a new `Todo`
// to the list below (use `crypto.randomUUID()` for `id`).
// - Clear the input after a successful add.
// - Each list item has a "Delete" button that removes only that item.
// - Empty / whitespace-only input must not be added.

// Use `useState<string>('')` for the input value and `useState<Todo[]>([])`
// for the todos. Render the list with `.map()` and key by `todo.id`.

// Type your handlers: `(e: React.ChangeEvent<HTMLInputElement>) => void`.

type Todo = {
  id: string;
  text: string;
};

export const TodoList = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState<Todo[]>([]);

  const addToList = () => {
    if (input.trim() === "") {
      alert("Eingabe darf nicht leer sein!");
      return;
    }
    const newTodo: Todo = {
      text: input,
      id: self.crypto.randomUUID().toString(),
    };

    console.log(newTodo);
    setList((prev) => [...prev, newTodo]);
    setInput("");
  };

  const removeFromList = (removedTodo: Todo) => {
    setList((prev) => prev.filter((item) => item.id !== removedTodo.id));
    console.log("removed");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <>
      <div className="input-container">
        <input
          type="text"
          value={input}
          placeholder="Aufgaben eingeben"
          onChange={handleChange}
        />
        <button onClick={addToList}>Aufgabe hinzufügen</button>
      </div>
      <div>
        <ul className="list">
          {list.map((todo) => (
            <li className="list-item" key={todo.id}>
              {todo.text}
              <button onClick={() => removeFromList(todo)}>Löschen</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
