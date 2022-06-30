import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { useVideo } from "../../context/video-context";
import { getHistoryService, clearHistoryService } from "../../services";
import { VideoCard } from "../../components";

export const History = () => {
  const { token } = useAuth();
  const { videoState, videoDispatch } = useVideo();
  const { history } = videoState;

  const clearHistoryHandler = () => clearHistoryService(videoDispatch, token);

  useEffect(() => {
    getHistoryService(videoDispatch, token);
  }, [videoDispatch, token]);

  return (
    <div className="flex flex-col p-6 ">
      {history.length ? (
        <div>
          <div className="flex items-center">
            <div className="flex flex-col">
              <h2 className="text-2xl font-semibold tracking-wider font-primary">
                History
              </h2>
              <span className="text-sm text-slate-400">
                {history.length} videos
              </span>
            </div>
            <button
              className="ml-auto flex items-center gap-3 m-4 border-sky-500 border-2 py-2 px-6 rounded-md hover:bg-sky-600 font-semibold"
              onClick={clearHistoryHandler}
            >
              Clear History
            </button>
          </div>
          <div className="grid sm:grid-cols-[repeat(auto-fit,minmax(35rem,1fr))] gap-y-12 mt-7 md:justify-items-center">
            {history.map((video) => (
              <VideoCard video={video} key={video._id} from="history" />
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
