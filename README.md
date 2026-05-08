## <u>React - Beginner - Challenge</u>

Hier ist die React-Beginner-Challenge, die mein Wissen vertiefen soll. Die Challenge ist in mehrere Aufgaben unterteilt, welche verschiedene Konzepte abdecken und im Schwierigkeitsgrad stetig steigen.

### <u>📜 Die Regeln:</u>

- **TypeScript überall:** Konsequente Nutzung von TypeScript. Komponentendateien nutzen `.tsx`, reine Logik- und Hilfsdateien `.ts`.
- **Eine Komponente pro Datei:** Der Dateiname muss exakt dem Komponentennamen entsprechen (z. B. `Button.tsx`).
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
card {
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
