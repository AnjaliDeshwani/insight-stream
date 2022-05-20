import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { useVideo } from "../../context/video-context";
import { getHistoryService } from "../../services";
import { VideoCard } from "../../components";

export const WatchLater = () => {
  const { token } = useAuth();
  const { videoState, videoDispatch } = useVideo();
  const { watchlater } = videoState;

  useEffect(() => {
    getHistoryService(videoDispatch, token);
  }, [videoDispatch, token]);

  return (
    <div className="flex flex-col p-6 ">
      {watchlater.length ? (
        <div>
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold tracking-wider font-primary">
              Watch Later
            </h2>
            <span className="text-sm text-slate-400">
              {watchlater.length} videos
            </span>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(35rem,1fr))] gap-y-12 mt-7 md:justify-items-center">
            {watchlater.map((video) => (
              <VideoCard video={video} key={video._id} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col p-3 md:p-6 font-bold h-[calc(100vh-4rem)] items-center justify-center">
          <h1 className="text-2xl md:text-4xl">There are no videos to show</h1>
          <Link
            to="/explore"
            className="bg-slate-900 dark:bg-white mt-2 md:mt-5 md:px-8 px-4 py-2 text-sky-500 text-xl font-bold font-primary uppercase rounded-full tracking-wide hover:bg-sky-500 dark:hover:bg-sky-500 hover:text-black"
          >
            Explore Now
          </Link>
        </div>
      )}
    </div>
  );
};
