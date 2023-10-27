/* eslint-disable react/prop-types */
const Seasons = ({ seasons }) => {
  return (
    <div className="flex flex-col">
      <h2 className="font-semibold text-2xl">Seasons</h2>
      <div className="mx-4 text-lg">
        <p className="">Seasons in total: {seasons ? seasons.length : ""}</p>
        <p>
          Episodes in total:{" "}
          {seasons?.reduce((sum, season) => sum + season.episodeOrder, 0)}
        </p>

        <div>
          {seasons?.map((season) => (
            <div key={season.id} className="flex items-center my-2 px-2">
              <div className="flex-1">
                <p>
                  Season {season.number} - Episodes: {season.episodeOrder}
                </p>
              </div>

              <div className="flex-1">
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
