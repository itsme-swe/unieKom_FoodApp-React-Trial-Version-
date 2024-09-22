import RestroCardComponent from "./RestaurantCardComponent";
import restroList from "../utils/restroList";
import { useState, useEffect } from "react";

const BodyComponent = () => {
  const [listOfRestro, setListOfRestro] = useState(restroList);
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
