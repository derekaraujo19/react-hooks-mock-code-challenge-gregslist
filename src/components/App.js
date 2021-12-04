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


// ** Problems with two states - when you delete one when you're in a filtered view, it doesn't remove it from the other

function App() {
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then((items) => setListings(items));
  }, []);


  function handleDeleteListing(deletedListing){
    const updatedListings = listings.filter((listing) => listing.id !== deletedListing.id);
    setListings(updatedListings);
    setFilteredListings(updatedListings);
  }

  function filterSearch(searchValue) {
    if (searchValue === "") {
      setFilteredListings([]);
    } else {
      const filteredSearch = listings.filter((listing) => (listing.description).includes(searchValue))
      setFilteredListings(filteredSearch)
    }
    }


  // console.log(listings);
  return (
    <div className="app">
      <Header onSubmitSearch={filterSearch}/>
      <ListingsContainer
        listings={filteredListings.length > 0 ? filteredListings : listings}
        handleDeleteListing={handleDeleteListing}
      />
    </div>
  );
}

export default App;
