# React - Beginner - Challenge

Hier ist die React-Beginner-Challenge welche mein Wissen vertiefen soll. Die Challange war in mehreren Challenges unterteilt, welche verschieden Konzepte abdecken und sich von der Schwierigkeit immer steigerten.

## Regeln:

- **Typescript überall**

## Challenge 1 : Button Compentent

Hier erstellte ich ein Button-Komponente, welcher einen `Buttonprop`-Objekt bekommen hat, welcher eine `label` (Von Typ`string`) und einen `onclick`-Funktion (von Typ `()=>void`) besaß.

```ts
type Buttonprops = {
  label: string;
  onClick: () => void;
};
```

Die Funktionweise des Buttons ist simpel. Die Komponente nimmt `props`entgegen und agiert basierend auf den übergebenen Werten.

## Challenge 2 : Card Componente
