import { FilterContainer, VideoCard } from "../../components";
import { useVideosFilter } from "../../hooks/useVideosFilter";

export const Explore = () => {
  const videos = useVideosFilter();
  return (
    <div className="flex flex-col p-6 items-center md:items-stretch">
      <FilterContainer />
      {videos.length > 0 ? (
        <div className="mt-8 grid  grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] gap-x-4 gap-y-6">
          {videos.map((video) => (
            <VideoCard video={video} key={video._id} />
          ))}
        </div>
      ) : (
        <h3 className="m-8 text-center font-bold text-xl">
          No videos found. Search for something else!
        </h3>
      )}
    </div>
  );
};
