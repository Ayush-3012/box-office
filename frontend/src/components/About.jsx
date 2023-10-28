{
  /* eslint-disable  */
}

import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Seasons from "./about-data/Seasons";
import Cast from "./about-data/Cast";
import Details from "./about-data/Details";
import MainAbout from "./about-data/MainAbout";

const API = import.meta.env.VITE_API_URL_ID;
const MORE_INFO = import.meta.env.VITE_SEASONS_AND_CAST;

const About = () => {
  const { showId } = useParams();
  const [show, setShow] = useState({});

  useEffect(() => {
    axios
      .get(API + `${showId}` + MORE_INFO)
      .then((res) => setShow(res.data))
      .catch((err) => console.log(err));
  }, [showId]);

  const imgUrl = show.image
    ? show.image.medium
    : "https://demofree.sirv.com/nope-not-here.jpg";

  const rating = show.rating ? show.rating.average : "N/A";
  const { seasons, cast } = show._embedded ? show._embedded : "";

  return (
    <div className="px-4 m-4 rounded-xl overflow-y-scroll h-[95%] bg-slate-700">
      <div className="flex flex-col my-10 bg-slate-800 rounded-xl w-[80%] p-4 mx-auto relative">
        <div className="flex justify-evenly items-center max-md:flex-col gap-5">
          <div className="px-10 py-5 flex-2">
            <img
              src={imgUrl}
              className="rounded-ss-xl rounded-ee-xl shadow-[1px_1px_20px_rgb(256,256,256)]"
            />
          </div>
          <MainAbout name={show.name} type={show.type} rating={rating} language={show.language} summary={show.summary} genres={show.genres} officialSite={show.officialSite} />
        </div>
        <hr />
        <Details status={show.status} premiered={show.premiered} />
        <hr />
        <Seasons seasons={seasons} />
        <hr />
        <Cast cast={cast} />
      </div>
    </div>
  );
};

export default About;
