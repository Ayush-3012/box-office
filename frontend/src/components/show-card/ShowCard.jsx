/* eslint-disable react/prop-types */
import ShowSingleCard from "./ShowSingleCard";

const ShowCard = ({ shows }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 py-1 gap-2">
      {shows.map((item, index) => (
        <ShowSingleCard
          key={index}
          id={item.show.id}
          show={item.show}
          index={index}
        />
      ))}
    </div>
  );
};

export default ShowCard;
