// Components
import Beginning from "./components/Beginning";
import Features from "./components/Features";
import Opinions from "./components/Opinions";
import TopFooter from "./components/TopFooter";
import BottomFooter from "./components/BottomFooter";

// Styles
import "./styles/reset.css";
import "./scss/styles.scss";

const App = () => {
  return (
    <>
      <Beginning />
      <Features />
      <Opinions />
      <TopFooter />
      <BottomFooter />
    </>
  )
}

export default App;