import { useState, useEffect } from "react";
import axios from "axios";
import ShowCard from "./show-card/ShowCard";
import Body from "./MainLayout/Body";

const LikedShows = () => {
  const [myShows, setMyShows] = useState([]);

  useEffect(() => {
    updateDb();
  }, []);

  const updateDb = async () => {
    await axios
      .get(import.meta.env.VITE_URI)
      .then((res) => {
        setMyShows(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="px-4 m-4 rounded-xl overflow-y-scroll h-[95%] bg-slate-700">
      <div className="flex justify-center items-center flex-col gap-4 p-2">
        <Body />
      </div>
      <div className="flex mx-2">
        <h1 className="text-4xl underline px-4 tracking-wider py-2 text-white font-serif">
          Liked Shows
        </h1>
      </div>
      <div className="mx-6">
        {updateDb()}
        <ShowCard shows={myShows} />
      </div>
    </div>
  );
};

export default LikedShows;
