/* eslint-disable react/prop-types */
const Seasons = ({ seasons }) => {
  return (
    <div className="flex flex-col">
      <h2 className="font-semibold text-2xl text-emerald-300">Seasons</h2>
      <div className="mx-4 text-lg">
        <p className="text-fuchsia-300 font-medium">Seasons in total: {seasons ? seasons.length : ""}</p>
        <p className="text-fuchsia-300 font-medium">
          Episodes in total:{" "}
          {seasons?.reduce((sum, season) => sum + season.episodeOrder, 0)}
        </p>

        <div>
          {seasons?.map((season) => (
            <div key={season.id} className="flex max-md:flex-col items-center my-2 px-2">
              <div className="flex-1">
                <p className="text-emerald-300">
                  Season {season.number} - Episodes: {season.episodeOrder}
                </p>
              </div>

              <div className="flex-1 text-fuchsia-300">
                Aired:{" "}
                <strong>
                  {season.premiereDate} - {season.endDate}
                </strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Seasons;
