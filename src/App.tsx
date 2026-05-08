import { useState, useEffect } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { Counter } from "./components/Counter";
import { DraftInput } from "./components/DraftInput";
import { TodoList } from "./components/TodoList";
import { ToggleTheme } from "./components/ToggleTheme";
import { UserList } from "./components/UserList";
import { withLoading } from "./hoc/withLoading";
import { withError } from "./hoc/withError";
import { SignupForm } from "./components/SignupForm";

const UserListWithLoading = withLoading(UserList);
const UserListWithErrorAndLoading = withError(UserListWithLoading);

type User = {
  id: number;
  name: string;
  email: string;
};

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users`);

        if (!res.ok) {
          throw new Error("Error Status: " + res.status);
        }

        const result: User[] = await res.json();

        setUsers(result);
      } catch (e) {
        setError((e as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="app-container">
      <h1>Hier entsteht die React-Beginner-Challenge</h1>{" "}
      <section className="challenge-container">
        <h2 className="challenge-header">Challenge 1: Button Component</h2>
        <p>
          <strong>Ziel:</strong> Grundlagen von JSX, Props und CSS lernen.
          Erstelle eine Button-Komponente mit eigenem TypeScript-Interface und
          individuellem Styling.
        </p>
        <div className="button-group">
          <Button
            label="Erster Button"
            onClick={() => alert("first clicked")}
          />
          <Button
            label="Zweiter Button"
            onClick={() => alert("second clicked!")}
          />
        </div>
      </section>
      <section className="challenge-container">
        <h2 className="challenge-header">Challenge 2: Card Component</h2>
        <p>
          <strong>Ziel:</strong>HTML- und CSS-Strukturen verstehen. Erstelle
          eine Card-Komponente mit eigenem Interface und nutze flex-direction:
          row, um sie sauber in einer Reihe anzuordnen.
        </p>
        <div className="card-grid">
          <Card
            imageUrl="https://picsum.photos/320/199"
            title=""
            description="Beschreibung 1"
          />
          <Card
            imageUrl="https://picsum.photos/320/200"
            title=""
            description="Beschreibung 2"
          />
          <Card
            imageUrl="https://picsum.photos/320/201"
            title=""
            description="Beschreibung 3"
          />
        </div>
      </section>
      <section className="challenge-container">
        <h2 className="challenge-header">
          Challenge 3: Counter with 'useState'
        </h2>
        <p>
          <strong>Ziel:</strong> GDie Basics der React-Hooks verstehen. Erstelle
          einen Counter mithilfe von useState. Wichtig: Der Counter darf nicht
          unter 0 sinken!
        </p>
        <Counter />
      </section>
      <section className="challenge-container">
        <h2 className="challenge-header">Challenge 4: Toggle Theme</h2>
        <p>
          <strong>Ziel:</strong> Abgeleitete Klassennamen und boolesche
          Zustände. Den Zustand über einen Boolean steuern und den Button-Text
          dynamisch anpassen.
        </p>
        <ToggleTheme />
      </section>
      <section className="challenge-container">
        <h2 className="challenge-header">Challenge 5: Todo-List</h2>
        <p>
          <strong>Ziel:</strong> Arrays im State, Listen in JSX und
          Input-Handling. Implementierung einer Todo-Liste mit Add- und
          Delete-Funktionen.
        </p>
        <TodoList />
      </section>
      <section className="challenge-container">
        <h2 className="challenge-header">
          Challenge 6 & 8 : Fetch with 'useEffect' / HOC
        </h2>
        <p>
          <strong>Ziel:</strong> Nebeneffekte und asynchrone Daten. Lade Daten
          von einer externen API und verwalte Lade- sowie Fehlerzustände. Sowie
          eine HOC-Funktion erstellen die eine Komponenten aufnimmt und eine
          neue Komponenten ausgibt mit zusätzlichen Verhalten.
        </p>
        <UserListWithErrorAndLoading
          error={error}
          isLoading={loading}
          users={users}
        />
      </section>
      <section className="challenge-container">
        <h2 className="challenge-header">
          Challenge 7 : Custom Hook 'useLocalStorage'
        </h2>
        <p>
          <strong>Ziel: </strong>Logik in einem wiederverwendbaren Hook
          extrahieren. Text wird im LocalStorage gespeichert und überlebt
          Seiten-Refresh
        </p>
        <DraftInput />
      </section>
      <section className="challenge-container">
        <h2 className="challenge-header">
          Challenge 9 : Form with 'useForm' Custom Hook
        </h2>
        <p>
          <strong>Ziel:</strong>Komnination aller vorhergegangen Konzepte.
          Erstellen einer generischen, wiederverwendbaren Form Hook.
        </p>
        <SignupForm />
      </section>
    </div>
  );
}

export default App;
