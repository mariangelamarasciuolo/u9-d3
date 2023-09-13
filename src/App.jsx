import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopBar from "./components/TopBar";
import Jumbo from "./components/Jumbo";
import Footer from "./components/Footer";
import TVShows from "./components/TVShows";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <div className="App bg-dark text-light">
      <BrowserRouter>
        <TopBar />
        <Jumbo />
        <Routes>
          <Route path="/" element={<TVShows />} />
          <Route path="MovieDetails" element={<MovieDetails />} />
        </Routes>
        {/* <FilmList movieTitle="harry%20potter" />
        <FilmList movieTitle="fast%20furious" />
        <FilmList movieTitle="breaking%20bad" /> */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
