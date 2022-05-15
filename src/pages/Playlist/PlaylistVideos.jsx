import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { VideoCard } from "../../components";
import { useVideo } from "../../context/video-context";
import { useAuth } from "../../context/auth-context";
import { getVideosFromPlaylistService } from "../../services";

export const PlaylistVideos = () => {
  const { playlistId } = useParams();
  const { videoState, videoDispatch } = useVideo();
  const { token } = useAuth();
  const { playlistVideos } = videoState;

  useEffect(() => {
    getVideosFromPlaylistService(playlistId, videoDispatch, token);
  }, [playlistId, videoDispatch, token]);
  return (
    <div className="flex flex-col p-6">
      <div className="flex flex-col">
        <h2 className="text-2xl font-semibold tracking-wider font-primary">
          {playlistVideos.title}
        </h2>
        <span className="text-sm text-slate-400">
          {playlistVideos.videos.length} videos
        </span>
      </div>
      <div className="mt-8 grid  grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] gap-x-4 gap-y-6">
        {playlistVideos.videos.map((video) => (
          <VideoCard
            video={video}
            key={video._id}
            playlistId={playlistId}
            from="playlist"
          />
        ))}
      </div>
    </div>
  );
};
