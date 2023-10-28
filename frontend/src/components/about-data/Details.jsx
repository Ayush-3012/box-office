/* eslint-disable react/prop-types */
const Details = ({ status, premiered }) => {
  return (
    <>
      <h2 className="font-semibold text-2xl text-emerald-300">Details</h2>
      <div className="my-2 flex flex-col gap-2 items-start mx-4">
        <span className="px-2 py-1 rounded-md bg-fuchsia-600 text-xl text-white">
          Status : {status}
        </span>
        <span className="px-2 py-1 rounded-md bg-fuchsia-600 text-xl text-white">
          Premiered : {premiered}
        </span>
      </div>
    </>
  );
};

export default Details;
