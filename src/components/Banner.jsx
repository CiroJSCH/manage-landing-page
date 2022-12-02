// Images
import illustration from "/images/illustration-intro.svg";

// Styles
import "../scss/banner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <img src={illustration} alt="Graphics illustration"/>
      <div className="banner__text">
        <h1>Bring everyone together to build better products.</h1>
        <p>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
        <button>Get started</button>
      </div>
    </div>
  )
}

export default Banner