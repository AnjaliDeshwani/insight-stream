import { ThumbUp, PlaylistAdd, WatchLater, Delete } from "@mui/icons-material";
import { useVideo } from "../../context/video-context";
import { useAuth } from "../../context/auth-context";
import { isInLikedVideos, isInWatchLater } from "../../utils";
import {
  addToWatchLaterService,
  removeFromWatchLaterService,
  removeFromLikesService,
  removeFromHistoryService,
} from "../../services";

export const VideoCardModal = ({
  modalRef,
  video,
  setShowModal,
  setSaveToPlaylistModal,
  from,
}) => {
  const { videoState, videoDispatch } = useVideo();
  const { token } = useAuth();
  const { _id: id } = video;
  const inWatchLater = isInWatchLater(id, videoState);
  const isLiked = isInLikedVideos(id, videoState);

  const watchLaterHandler = (e) => {
    e.stopPropagation();
    inWatchLater
      ? removeFromWatchLaterService(id, token, videoDispatch)
      : addToWatchLaterService(video, token, videoDispatch);
    setShowModal(false);
  };

  const likeHandler = (e) => {
    e.stopPropagation();
    removeFromLikesService(id, token, videoDispatch);
    setShowModal(false);
  };

  const historyHandler = (e) => {
    e.stopPropagation();
    removeFromHistoryService(id, token, videoDispatch);
    setShowModal(false);
  };

  const playlistHandler = (e) => {
    e.stopPropagation();
    setSaveToPlaylistModal(true);
    setShowModal(false);
  };

  return (
    <div
      ref={modalRef}
      className="absolute top-16 left-6 z-30 flex flex-col gap-3 bg-stone-100 dark:bg-slate-700 py-4 w-60 rounded-sm"
    >
      {inWatchLater ? (
        <div
          className="flex items-center gap-2  hover:bg-stone-300 dark:hover:bg-slate-100 dark:hover:bg-opacity-30 cursor-pointer  px-2 py-1"
          onClick={watchLaterHandler}
        >
          <span>
            <WatchLater className="h-6 w-6" />
          </span>
          <span>Remove from Watch Later</span>
        </div>
      ) : (
        <div
          className="flex items-center gap-2 hover:bg-stone-300 dark:hover:bg-slate-100 hover:bg-opacity-30 cursor-pointer  px-2 py-1"
          onClick={watchLaterHandler}
        >
          <span>
            <WatchLater className="h-6 w-6" />
          </span>
          <span>Save to Watch Later</span>
        </div>
      )}

      <div
        className="flex items-center gap-2 hover:bg-stone-300 dark:hover:bg-slate-100 hover:bg-opacity-30 cursor-pointer  px-2 py-1"
        onClick={playlistHandler}
      >
        <span>
          <PlaylistAdd className="h-6 w-6" />
        </span>
        <span>Save to Playlist</span>
      </div>
      {isLiked && (
        <div
          className="flex items-center gap-2 hover:bg-stone-300 dark:hover:bg-slate-100 hover:bg-opacity-30 cursor-pointer  px-2 py-1"
          onClick={likeHandler}
        >
          <span>
            <ThumbUp className="h-6 w-6" />
          </span>
          <span>Removed from liked</span>
        </div>
      )}
      {from === "history" && (
        <div
          className="flex items-center gap-2 hover:bg-stone-300 dark:hover:bg-slate-100 hover:bg-opacity-30 cursor-pointer  px-2 py-1"
          onClick={historyHandler}
        >
          <span>
            <Delete className="h-6 w-6" />
          </span>
          <span>Removed from history</span>
        </div>
      )}
    </div>
  );
};
