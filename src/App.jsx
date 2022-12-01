// Components
import BottomFooter from "./components/BottomFooter";
import TopFooter from "./components/TopFooter";
import Beginning from "./components/Beginning";

// Styles
import "./styles/reset.css";
import "./scss/styles.scss";

const App = () => {
  return (
    <>
      <Beginning />
      <TopFooter />
      <BottomFooter />
    </>
  )
}

export default App;