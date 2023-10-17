import "./App.css";
import About from "./components/About/About";
import Choose from "./components/choose/Choose";
import Feature from "./components/features/Feature";
import Gallery from "./components/gallery/Gallery";
import Header from "./components/heaeder/Header";
import Home from "./components/home/Home";
import Menu from "./components/Menu/Menu";
import Offer from "./components/offer/Offer";
import Reservation from "./components/reservation/Reservation";
import Start from "./components/stats/Start";
import { Team } from "./components/team/Team";
function App() {
  return (
    <>
      <Header />
      <Home />
      <About/>
      <Feature/>
      <Menu />
      <Choose />
      <Start />
      <Gallery />
      <Offer />
      <Team />
      <Reservation/>
    </>
  );
}
export default App;
