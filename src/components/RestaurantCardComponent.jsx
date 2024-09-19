//⇒ Yae hamara Restaurant Component hai joh ki dynamically typed hai.
const RestroCardComponent = (props) => {
  const { restroData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    restroData?.info;

  const { slaString } = restroData?.info?.sla;
  return (
    <div className="restro-cards">
      <img
        className="restro-logo"
        alt="logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating}</h5>
      <h5>{costForTwo}</h5>
      <h5>{slaString} minutes</h5>
    </div>
  );
};

export default RestroCardComponent;
