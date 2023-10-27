import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ShowCard from "./show-card/ShowCard";

const API = import.meta.env.VITE_API_URL;

const Home = () => {
  const [shows, setShows] = useState([]);
  const [query, setQuery] = useState("");
  const [showType, setShowType] = useState("home");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(API + `${query}`)
      .then((res) => {
        setShows(res.data);
      })
      .catch((err) => console.log(err));

    setQuery("");
  };

  return (
    <div className="p-4">
      <div className="flex justify-center items-center flex-col gap-4 p-2">
        <h1 className="font-mono text-5xl font-bold text-slate-400 py-1 px-2 tracking-tight">
          <span className="text-blue-500">BOX</span>-
          <span className="text-red-300">OFFICE</span>
        </h1>
        <div className="flex justify-center items-center gap-x-3 px-2 py-1">
          <Link
            to="/"
            className="bg-sky-300 hover:bg-sky-600 hover:text-white hover:scale-110 transition ease-in-out duration-300 px-4 py-1 rounded-lg text-xl"
            onClick={() => setShowType("home")}
          >
            Home
          </Link>
          <Link
            to="/starred"
            className="bg-red-300 hover:bg-pink-500 hover:text-white hover:scale-110 transition ease-in-out duration-300 px-4 py-1 rounded-lg text-xl"
            onClick={() => setShowType("mybooks")}
          >
            Starred
          </Link>
        </div>
        <form
          className={`flex flex-col gap-2 items-center `}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Search For Shows..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border border-slate-300 focus:shadow-md focus:shadow-slate-600 w-72 rounded-lg outline-none px-3 py-2"
          />
          <button
            type="submt"
            className="border w-fit px-5 py-1 bg-blue-400 hover:bg-red-400 hover:scale-110 transition ease-in-out duration-300  hover:text-white rounded-md"
          >
            Search
          </button>
        </form>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Shows</h1>
      </div>
      {showType === "home" ? (
        <ShowCard shows={shows} />
      ) : (
        <ShowCard shows={shows} />
      )}
    </div>
  );
};

export default Home;
