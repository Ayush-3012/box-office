/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { BiShow } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import axios from "axios";
import { useSnackbar } from "notistack";
import ShowInfo from "./ShowInfo";

const ShowSingleCard = ({ id, show, index }) => {
  const { enqueueSnackbar } = useSnackbar();
  const imgUrl = show.image
    ? show.image.medium
    : "https://demofree.sirv.com/nope-not-here.jpg";

  const updateFavorite = () => {
    const data = {
      id: id,
      show,
    };
    axios
      .post("http://localhost:5000/liked/shows", data)
      .then((res) => {
        const { message } = res.data;
        enqueueSnackbar(message, { variant: "success" });
      })
      .catch((err) => {
        enqueueSnackbar("Error", { variant: "error" });
        console.log(err);
      });
  };

  return (
    <div className="bg-slate-800 font-serif rounded-2xl m-2 hover:shadow-[1px_1px_20px_rgb(52,211,153)] hover:-translate-y-3 transition ease-in-out duration-300">
      <h4 className="text-white text-2xl text-center">{index + 1}.</h4>
      <div className="flex justify-center mb-2">
        <img
          src={imgUrl}
          className="rounded-2xl shadow-[1px_1px_15px_rgb(256,256,256)]"
        />
      </div>
      <ShowInfo
        name={show.name}
        type={show.type}
        language={show.language}
        summary={show.summary}
      />
      <div className="flex justify-evenly py-1">
        <Link to={`/about/show/${id}`} target="_blank">
          <BiShow className="text-5xl text-fuchsia-400 hover:text-white hover:scale-110 transition duration-200 ease-in-out cursor-pointer" />
        </Link>
        <MdFavoriteBorder
          className="text-5xl text-emerald-400 hover:text-white hover:scale-110 transition duration-200 ease-in-out cursor-pointer"
          onClick={updateFavorite}
        />
      </div>
    </div>
  );
};

export default ShowSingleCard;
