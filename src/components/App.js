import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

// DELIVERABLE 1:
// Create state to house listings
// useEfect to make GET request to server
// update state
// send listings down to ListingsContainer where it will get mapped out to ListingCard

// DELIVERABLE 4:

// Create local state in Search to house value of search bar, set via onChange
// handle submit by sending search value (in state value) back up to App
// in App, create handleSearch that compares search state with listings state

function App() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then((items) => setListings(items));
  }, []);

  function handleDeleteListing(deletedListing){
    const updatedListings = listings.filter((listing) => listing.id !== deletedListing.id);
    setListings(updatedListings);
  }

  function filterSearch(searchValue){
      let filteredSearch = listings.filter((listing) => (listing.description).includes(searchValue));
    }


  // console.log(listings);
  return (
    <div className="app">
      <Header onSubmitSearch={filterSearch}/>
      <ListingsContainer
        listings={listings}
        handleDeleteListing={handleDeleteListing}
      />
    </div>
  );
}

export default App;
