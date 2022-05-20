import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllPlaylistService } from "../../services";
import { useAuth } from "../../context/auth-context";
import { useVideo } from "../../context/video-context";
import { PlaylistCard } from "./PlaylistCard";

export const Playlist = () => {
  const { token } = useAuth();
  const { videoState, videoDispatch } = useVideo();
  const { playlists } = videoState;

  useEffect(() => {
    getAllPlaylistService(videoDispatch, token);
  }, [videoDispatch, token]);

  return (
    <div className="flex flex-col p-6 ">
      {playlists.length > 0 ? (
        <div>
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold tracking-wider font-primary">
              Playlist
            </h2>
            <span className="text-sm text-slate-400">
              {playlists.length} {`playlist${playlists.length > 1 ? "s" : ""}`}
            </span>
          </div>
          <div className="mt-8 grid  grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] gap-x-4 gap-y-6">
            {playlists.map((playlist) => (
              <PlaylistCard playlist={playlist} key={playlist._id} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col p-3 md:p-6 font-bold h-[calc(100vh-4rem)] items-center justify-center">
          <h1 className="text-2xl md:text-4xl">
            You haven't created playlist yet.
          </h1>
          <Link
            to="/explore"
            className="bg-slate-900 dark:bg-white mt-2 md:mt-5 md:px-8 px-4 py-2 text-sky-500 text-xl font-bold font-primary uppercase rounded-full tracking-wide hover:bg-sky-500 dark:hover:bg-sky-500 hover:text-black"
          >
            Create Now
          </Link>
        </div>
      )}
    </div>
  );
};
