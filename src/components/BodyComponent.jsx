import RestroCardComponent from "./RestaurantCardComponent";
import restroList from "../utils/restroList";
import { useState, useEffect } from "react";
import Shimmer from "./ShimmerComponent";

const BodyComponent = () => {
  const [listOfRestro, setListOfRestro] = useState([]);

  const [searchTxt, setSearchTxt] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9152639&lng=75.75761729999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);

    const restroData =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestro(restroData);
  };
  // Conditional Rendering
  /*if (listOfRestro == 0) {
    return <Shimmer />;
  }*/

  // Using Ternary Operator on conditional rendering . Here the condition is if(listOfrestro == 0) so return Shimmer Component, else return below code

  return listOfRestro.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchTxt}
            onChange={(e) => {
              setSearchTxt(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              console.log(searchTxt);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-button"
          onClick={() => {
            const filteredRestroList = listOfRestro.filter(
              (ele) => ele.info.avgRating > 4.2
            );
            setListOfRestro(filteredRestroList);
          }}
        >
          Top Restaurants
        </button>
      </div>
      <div className="restro-container">
        {listOfRestro.map((elements) => {
          return (
            <RestroCardComponent key={elements.info.id} restroData={elements} />
          );
        })}
      </div>
    </div>
  );
};

export default BodyComponent;
