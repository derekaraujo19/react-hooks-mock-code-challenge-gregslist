import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

// DELIVERABLE 1:
// Create state to house listings
// useEfect to make GET request to server
// update state
// send listings down to ListingsContainer where it will get mapped out to ListingCard


function App() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then((items) => setListings(items));
  }, []);

  // console.log(listings);
  return (
    <div className="app">
      <Header />
      <ListingsContainer listings={listings} />
    </div>
  );
}

export default App;
