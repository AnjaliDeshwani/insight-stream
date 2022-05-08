import { FilterContainer, VideoCard } from "../../components";
import { useVideosFilter } from "../../hooks/useVideosFilter";

export const Explore = () => {
  const videos = useVideosFilter();
  return (
    <div className="flex flex-col p-6 items-center md:items-stretch">
      <FilterContainer />
      <div className="mt-8 grid  grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] gap-x-4 gap-y-6">
        {videos.map((video) => (
          <VideoCard video={video} key={video._id} />
        ))}
        {videos.map((video) => (
          <VideoCard video={video} key={video._id} />
        ))}
        {videos.map((video) => (
          <VideoCard video={video} key={video._id} />
        ))}
        {videos.map((video) => (
          <VideoCard video={video} key={video._id} />
        ))}
        {videos.map((video) => (
          <VideoCard video={video} key={video._id} />
        ))}
      </div>
    </div>
  );
};
