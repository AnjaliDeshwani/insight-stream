import { Delete } from "@mui/icons-material";
import {
  removePlaylistService,
  removeVideoFromPlaylistService,
} from "../../services";
import { useVideo } from "../../context/video-context";
import { useAuth } from "../../context/auth-context";

export const PlaylistModal = ({
  modalRef,
  setShowModal,
  playlistId,
  videoId,
  from,
}) => {
  const { videoDispatch } = useVideo();
  const { token } = useAuth();
  const removePlaylistHandler = (e) => {
    e.stopPropagation();
    from === "playlist"
      ? removeVideoFromPlaylistService(
          playlistId,
          videoId,
          token,
          videoDispatch
        )
      : removePlaylistService(playlistId, token, videoDispatch);
    setShowModal(false);
  };
  return (
    <div
      ref={modalRef}
      className="absolute top-44 right-8 z-30 flex flex-col gap-3 bg-slate-700 py-2 w-48 rounded-sm text-red-600"
    >
      <div
        className="flex items-center gap-2 hover:bg-slate-100 hover:bg-opacity-30 cursor-pointer  px-2 py-1"
        onClick={removePlaylistHandler}
      >
        <span>
          <Delete className="h-6 w-6" />
        </span>
        <span>Delete</span>
      </div>
    </div>
  );
};
