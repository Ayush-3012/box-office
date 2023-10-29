import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ShowCard from "./show-card/ShowCard";

const API = import.meta.env.VITE_API_URL;

const Home = () => {
  const [shows, setShows] = useState([]);
  const [query, setQuery] = useState("");
  const [showType, setShowType] = useState("home");
  const [myShows, setMyShows] = useState([]);

  useEffect(() => {
    updateDb();
  }, []);

  const updateDb = () => {
    axios
      .get("http://localhost:5000/")
      .then((res) => {
        setMyShows(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
    <div className="px-4 m-4 rounded-xl overflow-y-scroll h-[95%] bg-slate-700">
      <div className="flex justify-center items-center flex-col gap-4 p-2">
        <h1 className="font-mono text-5xl font-bold text-white py-1 px-2 tracking-tight">
          <span className="text-fuchsia-400">BOX</span>-
          <span className="text-emerald-400">OFFICE</span>
        </h1>
        <div className="flex justify-center items-center gap-x-3 px-2 py-1">
          <Link
            to="/"
            className="bg-sky-400 hover:bg-emerald-500 hover:text-white hover:scale-110 transition ease-in-out duration-300 px-4 py-1 rounded-lg text-xl"
            onClick={() => setShowType("home")}
          >
            Home
          </Link>
          <Link
            to="/starred"
            className="bg-red-300 hover:bg-fuchsia-500 hover:text-white hover:scale-110 transition ease-in-out duration-300 px-4 py-1 rounded-lg text-xl"
            onClick={() => setShowType("myShows")}
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
            className="focus:shadow-md focus:shadow-emerald-400 w-56 rounded-lg outline-none px-3 py-2"
          />
          <button
            type="submt"
            className="text-lg px-4 py-1 my-2 bg-blue-400 hover:bg-red-300 hover:scale-110 transition ease-in-out duration-200 hover:text-white rounded-md"
          >
            Search
          </button>
        </form>
      </div>
      <div className="flex mx-2">
        <h1 className="text-4xl underline px-4 tracking-wider py-2 text-white font-serif">
          Shows
        </h1>
      </div>
      <div className="mx-6">
        {showType === "home"
          ? (updateDb(), (<ShowCard shows={shows} />))
          : (updateDb(), (<ShowCard shows={myShows} />))}
      </div>
    </div>
  );
};

export default Home;
