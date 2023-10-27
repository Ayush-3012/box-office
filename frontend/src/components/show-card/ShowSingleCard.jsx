/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { PiFilmSlateBold, PiMicrophoneBold } from "react-icons/pi";
import { BiShow } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import { MdTypeSpecimen } from "react-icons/md";
// import axios from "axios";
// import { useSnackbar } from "notistack";

const ShowSingleCard = ({ id, show, index }) => {
  // const { enqueueSnackbar } = useSnackbar();
  const imgUrl = show.image
    ? show.image.medium
    : "https://demofree.sirv.com/nope-not-here.jpg";

  // const updateFavorite = () => {
  //   const data = {
  //     id: id,
  //     show,
  //   };
  //   axios
  //     .post("http://localhost:5000/shows", data)
  //     .then((res) => {
  //       const { message } = res.data;
  //       enqueueSnackbar(message, { variant: "success" });
  //       console.log();
  //     })
  //     .catch((err) => {
  //       enqueueSnackbar("Error", { variant: "error" });
  //       console.log(err);
  //     });
  // };

  return (
    <div className="border-2 border-gray-500 rounded-lg px-4 py-2 m-2 relative hover:shadow-xl">
      <h4 className="mb-3 text-xl text-gray-500">{index + 1}.</h4>
      <img src={imgUrl} className="w-52" />
      <h2 className="absolute top-2 right-2 px-3 py-2 bg-red-300 rounded-lg">
        {show.premiered}
      </h2>
      <div className="flex justify-start items-center gap-x-2 my-2">
        <PiFilmSlateBold className="text-red-300 text-3xl" />
        <h2 className="text-3xl">{show.name}</h2>
      </div>
      <div className="flex justify-evenly items-center gap-x-4 my-2 ">
        <div className="flex items-center justify-center gap-2">
          <MdTypeSpecimen className="text-red-300 text-3xl" />
          <h2 className="text-xl">{show.type}</h2>
        </div>
        <div className="flex items-center justify-center gap-2">
          <PiMicrophoneBold className="text-red-300 text-3xl" />
          <h2 className="text-xl">{show.language}</h2>
        </div>
      </div>
      <div className="my-2 ">
        <h4 className="text-lg px-2">
          {show.summary
            .split(" ")
            .slice(0, 10)
            .join(" ")
            .replace(/<.+?>/g, "") + "..."}
        </h4>
      </div>
      <div className="flex justify-evenly items-center gap-x-2 mt-4 p-4">
        <Link to={`/about/show/${id}`} target="_blank">
          <BiShow className="text-5xl text-blue-800 hover:text-black hover:scale-110 transition duration-200 ease-in-out cursor-pointer" />
        </Link>
        <MdFavoriteBorder
          className="text-5xl text-red-400 hover:text-black hover:scale-110 transition duration-200 ease-in-out cursor-pointer"
          // onClick={updateFavorite}
        />
      </div>
    </div>
  );
};

export default ShowSingleCard;
