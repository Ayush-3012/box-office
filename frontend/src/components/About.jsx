{
  /* eslint-disable  */
}
import { PiMicrophoneBold, PiFilmSlateBold, PiLinkBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { MdTypeSpecimen, MdStarRate } from "react-icons/md";
import axios from "axios";
import { useEffect, useState } from "react";
import Seasons from "./about-data/Seasons";
import Cast from "./about-data/Cast";

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
    <div className="py-8 px-4">
      <div className="flex flex-col border-2 border-red-400 rounded-xl h-fit w-[80%] max-w-full p-4 mx-auto relative">
        <div className="flex justify-evenly max-sm:flex-col gap-2">
          <div className="px-4 py-2">
            <img
              src={imgUrl}
              className="w-[40vw] rounded-ss-xl rounded-ee-xl"
            />
          </div>
          <div className="flex gap-4 flex-col px-4 py-2">
            <div className="flex gap-x-2 items-center">
              <PiFilmSlateBold className="text-red-300 text-4xl" />
              <h2 className="my-1 pr-4 text-4xl font-serif border-r-2 border-black">
                {show.name}
              </h2>
              <div className="flex gap-1 px-2 items-center">
                <MdStarRate className="text-yellow-400 text-3xl" />
                <h2 className="text-2xl">{rating}</h2>
              </div>
            </div>
            <div className="flex items-center gap-x-4">
              <div className="flex items-center justify-center pr-4 gap-2 border-r-2 border-black">
                <MdTypeSpecimen className="text-red-300 text-3xl" />
                <h2 className="text-xl">{show.type}</h2>
              </div>
              <div className="flex items-center justify-center gap-2">
                <PiMicrophoneBold className="text-red-300 text-3xl" />
                <h2 className="text-xl">{show.language}</h2>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <span
                className="font-seif text-xl"
                dangerouslySetInnerHTML={{ __html: show.summary }}
              />
              <span className="text-xl ">
                Genres:
                {show.genres?.map((genre) => (
                  <span
                    className="mx-1 text-lg border rounded-lg bg-blue-300 px-2"
                    key={genre}
                  >
                    {genre}
                  </span>
                ))}
              </span>
              <span>
                <Link
                  to={show.officialSite}
                  target="_blank"
                  className="italic font-medium text-slate-500 text-lg hover:underline hover:text-slate-700 hover:not-italic hover:scale-105 transition duration-200 ease-in-out flex gap-2"
                >
                  <PiLinkBold className="text-blue-500 text-3xl" />
                  More About
                </Link>
              </span>
            </div>
          </div>
        </div>
        <hr />
        <h2 className="font-semibold text-2xl">Details</h2>
        <div className="my-2 flex flex-col gap-2 items-start mx-4">
          <span className="px-2 py-1 rounded-md bg-slate-300 text-xl">
            Status : {show.status}
          </span>
          <span className="px-2 py-1 rounded-md bg-slate-300 text-xl">
            Premiered : {show.premiered}
          </span>
        </div>
        <hr />
        <Seasons seasons={seasons} />
        <hr />
        <Cast cast={cast} />
      </div>
    </div>
  );
};

export default About;
