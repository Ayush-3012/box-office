import { useState } from "react";
import axios from "axios";
import ShowCard from "./show-card/ShowCard";
import Body from "./MainLayout/Body";
import Fetch from "./MainLayout/Fetch";

const API = import.meta.env.VITE_API_URL;

const Home = () => {
  const [shows, setShows] = useState([]);
  const [query, setQuery] = useState("");

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
        <Body />
        <Fetch handleSubmit={handleSubmit} query={query} setQuery={setQuery} />
      </div>
      <div className="flex mx-2">
        <h1 className="text-4xl underline px-4 tracking-wider py-2 text-white font-serif">
          Shows
        </h1>
      </div>
      <div className="mx-6">
        <ShowCard shows={shows} />
      </div>
    </div>
  );
};

export default Home;
