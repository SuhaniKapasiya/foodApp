


const RestaurantCard = ({ resdata }) => {

   
const styleCard = {
  backgroundColor: "#f0f0f0",
};

  return (
    <div className="res-card " style={styleCard}>
      <div>
        <img className="res-logo" src={resdata.image} />
      </div>
      <div>
        <h1 className="title">{resdata.title}</h1>
        <h3>{resdata.category}</h3>
        <h3>Price {resdata.price}</h3>
        <h3>Rating {resdata.rating.rate}</h3>
        <h3>Delivey {resdata.rating.count} minutes</h3>
      </div>
    </div>
  );
};


export default RestaurantCard;