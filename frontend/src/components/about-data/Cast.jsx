/* eslint-disable react/prop-types */
const Cast = ({ cast }) => {
  return (
    <div>
      <h2 className="font-semibold text-2xl text-emerald-300">Cast</h2>
      <div className="flex flex-wrap mx-4 max-md:flex-col">
        {cast?.map(({ person, character, voice }) => (
          <div
            key={person.id}
            className="flex-[1_0_50%] flex items-center my-2 gap-5"
          >
            <div className="w-20 h-20 min-w-20 overflow-hidden rounded-full">
              <img
                src={
                  person.image
                    ? person.image.medium
                    : "https://demofree.sirv.com/nope-not-here.jpg"
                }
                className="object-cover w-full h-full"
              />
            </div>

            <div className="text-lg font-medium text-fuchsia-300">
              {person.name} | {character.name} {voice && "| Voiceover"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cast;
