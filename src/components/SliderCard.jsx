// Styles
import "../scss/sliderCard.scss";

const SliderCard = ({ opinion }) => {
  return (
    <div className="card-container">
      <img src={opinion.img} alt="" />
      <div className="card">
        <h4>{opinion.name}</h4>
        <p>"{opinion.opinion}"</p>
      </div>
    </div>
  );
};

export default SliderCard;
