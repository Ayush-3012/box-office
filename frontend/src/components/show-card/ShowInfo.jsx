/* eslint-disable react/prop-types */
import { PiFilmSlateBold, PiMicrophoneBold } from "react-icons/pi";
import { MdTypeSpecimen } from "react-icons/md";

const ShowInfo = ({ name, type, language, summary }) => {
  return (
    <>
      <div className="px-2">
        <div className="flex items-center gap-x-2">
          <PiFilmSlateBold className="text-emerald-400 text-2xl" />
          <h2 className="text-xl text-fuchsia-300">{name}</h2>
        </div>
        <div className="flex gap-5 my-2">
          <div className="flex items-center justify-center gap-2">
            <MdTypeSpecimen className="text-emerald-400 text-xl" />
            <h2 className="text-lg text-fuchsia-300">{type}</h2>
          </div>
          <div className="flex items-center justify-center gap-2">
            <PiMicrophoneBold className="text-emerald-400 text-xl" />
            <h2 className="text-lg text-fuchsia-300">{language}</h2>
          </div>
        </div>
        <div className="my-2">
          <h4 className="text-md px-2 text-white">
            {summary
              ? summary
                  .split(" ")
                  .slice(0, 10)
                  .join(" ")
                  .replace(/<.+?>/g, "") + "..."
              : ""}
          </h4>
        </div>
      </div>
    </>
  );
};

export default ShowInfo;
