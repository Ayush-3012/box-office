import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import LikedShows from "./components/LikedShows";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/starred" element={<LikedShows />} />
      <Route path="/about/show/:showId" element={<About />} />
    </Routes>
  );
}

export default App;
