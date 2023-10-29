/* eslint-disable react/prop-types */
const Fetch = ({ handleSubmit, query, setQuery }) => {
  return (
    <>
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
    </>
  );
};

export default Fetch;
