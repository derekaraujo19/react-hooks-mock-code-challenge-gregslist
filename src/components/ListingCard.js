import React, { useState } from "react";
// DELIVERABLE 2:
// create state for favorite, set initially to false
// on click, you update state

// DELIVERABLE 3:
//on click, handle delete function here that makes a delete request
// request sends deleted item back up to app via callback where
// the CB function creates an updated list filtering out deleted and sets state

function ListingCard({ img, description, location, listing, handleDeleteListing }) {
  const [favorite, setFavorite] = useState(false);

  function onDeleteListing() {
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: 'DELETE',
    })
      .then((r) => r.json())
      .then(() => handleDeleteListing(listing))
  }


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
        <button onClick={onDeleteListing} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
