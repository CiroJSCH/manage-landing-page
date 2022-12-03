// Components
import SliderCard from "./SliderCard";
import SliderOpinions from "./SliderOpinions";

// Utils
import opinions from "../util/opinions";

// Styles
import "../scss/opinions.scss";

const Opinions = () => {
  return (
    <div className="opinions">
      <h3>What they've said</h3>
      <SliderOpinions />
      <button className="btn">Get started</button>
    </div>
  )
}

export default Opinions;