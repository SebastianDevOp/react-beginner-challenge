## <u>React - Beginner - Challenge</u>

Hier ist die React-Beginner-Challenge, die mein Wissen vertiefen soll. Die Challenge ist in mehrere Aufgaben unterteilt, welche verschiedene Konzepte abdecken und im Schwierigkeitsgrad stetig steigen.

### <u>📜 Die Regeln:</u>

- **TypeScript überall:** Konsequente Nutzung von TypeScript. Komponentendateien nutzen `.tsx`, reine Logik- und Hilfsdateien `.ts`.
- **Eine Komponente pro Datei:** Der Dateiname muss exakt dem Komponentennamen entsprechen.
- **CSS-Organisation:** Die `.css`-Datei wird direkt oben in der jeweiligen Komponente importiert.
- **Typisierung der Props:** Props werden immer explizit mit einem `type` definiert.
- **Explizite Importe:** Beim Importieren werden vollständige Pfade genutzt.
- **Sichtbarkeit:** Jede neu erstellte Komponente wird in der `App.tsx` gerendert.
- **State-Immutability:** Den State niemals direkt mutieren – stattdessen immer ein neues Array oder Objekt erstellen.
- **Kleine Komponenten:** Komponenten klein halten (maximal 80 Zeilen Code pro Datei).

---

## Challenge 1 - Button-Komponente

In dieser Aufgabe habe ich eine `Button`-Komponente erstellt, die ein `ButtonProps`-Objekt erhält. Dieses definiert ein `label` (Typ: `string`) und eine `onClick`-Funktion (Typ: `() => void`).

```ts
type ButtonProps = {
  label: string;
  onClick: () => void;
};
```

Die Funktionsweise des Buttons ist simpel: Die Komponente nimmt die `props` entgegen und agiert basierend auf den übergebenen Werten.

```tsx
import "./Button.css";

export const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button className="btn" onClick={onClick}>
      {label}
    </button>
  );
};
```

💡 **Gelernt:**

- **Destructuring von Props:** Wie man Werte direkt aus dem Props-Objekt extrahiert, um den Code lesbarer zu machen.
- **Typensicherheit:** Die Verwendung von TypeScript stellt sicher, dass der Button immer einen Text und eine Funktion erhält, was Fehler zur Laufzeit verhindert.
- **Event-Handling:** Wie man eine Funktion als "Callback" von einer Eltern-Komponente an ein Kind-Element (den Button) weiterreicht.

---

# Challenge 2 - Card Compenent

In der zweiten Challenge ging es mehr um das Styling und die richtige Verwendung der `flexbox`. Zuerst habe ich das Tutorial "[An Interactive Guide to Flexbox](https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/)" angeschaut und anschließend ein `CardProps`-Objekt erstellt.

```ts
type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
};
```

Der Styling war hier im Fokus: Die Karte hat eine feste maximale Breite, einem Schatten und abgerundete Ecken.

```css
.card {
  display: flex;
  border: 1px solid #ddd;
  border-radius: 0;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 320px;
  padding: 2px;
  align-items: center;
}

.card-image {
  width: 100%;
  border-radius: 8px 8px 0 0;
}
```

In der `App.tsx` habe ich dann drei Karten nebeneinander gerendert. Damit die Karten passen habe ich Flexbox genutzt, um die Karten ordentlich anzuordnen.

```tsx
export const Card = ({ title, description, imageUrl }: CardProps) => {
  return (
    <>
      <div className="card">
        <img className="card-image" src={imageUrl} alt={description} />
        {title}
        <img />
      </div>
    </>
  );
};
```

💡 **Gelernt:**

- **CSS-Layouting:** Wie man gezielt CSS-Styling benutzt, um ein modernes Design zu erstellen.
- **Flexbox-Grundlagen:** Das Anordnen von mehreren Komponenten in einem Container mithilfe von `display: flex`.

---

# Challange 3 - Counter with useState()

Hier habe ich mit mit `useState()`gearbeitet um den State innerhalb der Komponenten zu managen. Dabei wurde ein Counter erstellt, welcher mit 2 Buttons, erhöht oder reduziert wurde. Dabei durfte der Counter nicht unter 0 gehen.

```tsx
export const Counter = () => {
  const [counter, setCounter] = useState<number>(0);

  const reduceCounter = () => {
    if (counter == 0) {
      alert("Zähler darf nicht negativ sein!");
      return;
    }
    setCounter(counter - 1);
  };
```

💡 **Gelernt:**

- **useState():** Wie man State innerhalb der Komponenten verwalten kann.
- ***

# Challenge 4 - Toggle Theme

Das Prinzip war, das man den Klassennamen des Button mithilfe eines `useState()` ableitete, indem man diesen bei jeden Klick auf den Button änderte. Dazu nutze ich den _Ternären Operator_, um zwischen den jeweiligen Fällen zu unterscheiden.

```tsx
export const ToggleTheme = () => {
  const [theme, setTheme] = useState<boolean>(false);

  return (
    <>
      <div>
        <button
          className={theme ? "dark" : "light"} // Ternärer Operator
          onClick={() => setTheme(!theme)}
        >
          {theme ? "Switch to Light" : "Switch to Dark"}
        </button>
      </div>
    </>
  );
};
```

💡 **Gelernt:**

- **Abgeleitete Klassennamen:** Styling kann agil mithilfe von Komponentenlogik geändert werden.
- **Boolesche Zustände:** `useState()`wird `boolean` als Typenparameter übergeben und somit wird die Logik gesteuert.

---

# Challenge 5 - Todo List

Die Aufgabe bestand darin ein "Todo-Liste" zu erstellen, die über ein `<input>` ein Aufgabe erhält und diesen in eine Liste hinzugefügt. Dabei sollten die Aufgaben diese Form haben:

```ts
type Todo = {
  id: string;
  text: string;
};
```

<u>Zu beachten waren folgende Punkte:</u>

- Ein Aufgabe wird über das Inputfeld eingegeben und anschließlich über den "Add"-Button hinzugefügt.
- Jede Aufgabe hat einen eigenen "Delete"-Button um die Aufgabe zu entfernen.
- Leere Felder sind nicht erlaubt.
- Nach jeder erfolgreichen Eingabe, soll das Eingabefeld wieder leer sein.
- die `id : string `soll mithilfe von `self.crypto.randomUUID().toString();` bestimmt werden.

`useState()` dient hier diesmal zum managen des Input und zudem zum verwalten der Liste. Dabei übergibt man den Typenparameter `Todo<[]>` ,also eine Array der Aufgaben.

```tsx
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
.
.
.

```

Bei `addtoList` wird zuerst die Eingabe überrpüft, sollte dieser leer sein. Wird eine Fehlermeldung ausgegeben. Anschließend wird ein Todo-Objekt erstellt, die `id` mithilfe von `self.crypto.randomUUID().toString()`bestimmt.
Bei den Setzen von State ist es üblich ein Kopie des Arrays zu erstellen.
