import { Link } from "react-router-dom";

const Body = () => {
  return (
    <>
      <h1 className="font-mono text-5xl font-bold text-white py-1 px-2 tracking-tight">
        <span className="text-fuchsia-400">BOX</span>-
        <span className="text-emerald-400">OFFICE</span>
      </h1>
      <div className="flex justify-center items-center gap-x-3 px-2 py-1">
        <Link
          to="/"
          className="bg-sky-400 hover:bg-emerald-500 hover:text-white hover:scale-110 transition ease-in-out duration-300 px-4 py-1 rounded-lg text-xl"
        >
          Home
        </Link>
        <Link
          to="/starred/"
          className="bg-red-300 hover:bg-fuchsia-500 hover:text-white hover:scale-110 transition ease-in-out duration-300 px-4 py-1 rounded-lg text-xl"
        >
          Starred
        </Link>
      </div>
    </>
  );
};

export default Body;
