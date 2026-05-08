import { useEffect, useState } from "react";

// ## Challenge 7 — Custom hook `useLocalStorage` *(hard)

// **Goal:** extract logic into a reusable, generic hook.

// Create `src/hooks/useLocalStorage.ts` exporting a generic hook:

// ```ts
// function useLocalStorage<T>(
//   key: string,
//   defaultValue: T
// ): [T, (value: T) => void]
// ```

// Behavior:

// - Reads the initial value from `localStorage` on first render;
// falls back to `defaultValue`.
// - Writing via the setter updates state *and* `localStorage`.
// - JSON-serialize on write, JSON-parse on read.
// - If `JSON.parse` throws (corrupted value), return `defaultValue`.

// Use it inside a small component (`src/components/DraftInput.tsx`):
// a text input whose value survives page refresh (`useLocalStorage<string>('draft', '')`).

export default function useLocalStorage<T>(key: string, defaultValue: T) {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(key)) ?? defaultValue,
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
