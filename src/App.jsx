import "./App.css";
import Header from "./components/heaeder/Header";
import Home from "./components/home/Home";
import Menu from "./components/Menu/Menu";
import WelcomePopup from "./components/Emotion/EmotionPopup";

function App() {
  return (
    <>
      <Header />
      <WelcomePopup/>
      <Home />
      <Menu/>
    </>
  );
}

export default App;
