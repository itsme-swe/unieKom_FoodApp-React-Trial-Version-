import RestroCardComponent from "./RestaurantCardComponent";

import restroList from "../utils/restroList";

const BodyComponent = () => {
  return (
    <div className="body">
      <div className="search-bar">Search</div>
      <div className="restro-container">
        {restroList.map((elements) => {
          return (
            <RestroCardComponent key={elements.info.id} restroData={elements} />
          );
        })}
      </div>
    </div>
  );
};

export default BodyComponent;
