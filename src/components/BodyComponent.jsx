import RestroCardComponent from "./RestaurantCardComponent";
import restroList from "../utils/restroList";
import { useState, useEffect } from "react";
import Shimmer from "./ShimmerComponent";

const BodyComponent = () => {
  const [listOfRestro, setListOfRestro] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9152639&lng=75.75761729999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);

    setListOfRestro(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listOfRestro == 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
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
