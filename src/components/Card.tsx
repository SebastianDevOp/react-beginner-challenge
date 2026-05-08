import "./Card.css";

// ## Challenge 2 — Card component *(easy)*

// **Goal:** practice HTML structure and CSS layout.

// Create a `Card` component. Props: `title: string`,
// `description: string`, `imageUrl: string`.

// Style the card with a border, a subtle shadow (`box-shadow`),
// padding, and a max width of 320px. The image should fill the card width and
// have rounded top corners only (`border-radius: 8px 8px 0 0`).

// Render three cards side-by-side in `App.tsx` using Flexbox
// (`display: flex; gap: 1rem; flex-wrap: wrap;`).
// For test images, use `https://picsum.photos/320/200`.

type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
};

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
