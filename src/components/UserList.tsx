import "./UserList.css";
import User from "../App";
// ## Challenge 6 — Fetch with `useEffect` *(medium)*

// **Goal:** side effects and async data.

// Create a `UserList` component that fetches
// `https://jsonplaceholder.typicode.com/users`
//  on mount and shows each user's name and email.

// Requirements:

// - Define `type User = { id: number; name: string; email: string }`.
// - Show `"Loading..."` while the request runs.
// - Show `"Failed to load"` on error. Treat non-2xx (`!res.ok`)
//  as error and use `.catch` to set the error state.
// - Use `useEffect` with an empty dependency array for the fetch.
// - State: `users: useState<User[]>([])`, `loading: useState<boolean>(true)`,
//  `error: useState<string | null>(null)`.
// - Always set `loading = false` once the request settles (success or error).

type User = {
  id: number;
  name: string;
  email: string;
};

type UserListProps = {
  users: User[];
};

export const UserList = ({ users }: UserListProps) => {
  return (
    <>
      <div className="userList">
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              Name : {user.name} | Email : {user.email}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
