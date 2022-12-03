// Libraries
import Slider from "react-slick";

// Components
import SliderCard from "./SliderCard";

// Utils
import opinions from "../util/opinions";

// Styles (libraries)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderOpinions = () => {
  let settings = {

    dots: false,
    infinite: true,
    arrows: true,
    slidesToShow: 3,
    initialSlide: 3,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <Slider {...settings} style={{ maxWidth: "90vw" }}>
      {opinions.map((opinion, index) => {
        return <SliderCard opinion={opinion} key={index} />;
      })}
    </Slider>
  );
};

export default SliderOpinions;
