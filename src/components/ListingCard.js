import React, { useState } from "react";
// DELIVERABLE 2:
// create state for favorite, set initially to false
// on click, you update state

// DELIVERABLE 3:
//

function ListingCard({ img, description, location }) {
  const [favorite, setFavorite] = useState(false);

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={img} alt={description} />
      </div>
      <div className="details" onClick={() => setFavorite(!favorite)}>
        {favorite ? (
          <button className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
