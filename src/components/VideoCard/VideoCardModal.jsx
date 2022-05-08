import { ThumbUp, PlaylistAdd, WatchLater } from "@mui/icons-material";
export const VideoCardModal = ({ modalRef }) => {
  return (
    <div
      ref={modalRef}
      className="absolute top-48 left-40 z-30 flex flex-col gap-3 bg-slate-700 py-4 w-60 rounded-sm"
    >
      <div className="flex items-center gap-2 hover:bg-slate-100 hover:bg-opacity-30 cursor-pointer  px-2 py-1">
        <span>
          <WatchLater className="h-6 w-6" />
        </span>
        <span>Save to Watch Later</span>
      </div>
      <div className="flex items-center gap-2 hover:bg-slate-100 hover:bg-opacity-30 cursor-pointer  px-2 py-1">
        <span>
          <PlaylistAdd className="h-6 w-6" />
        </span>
        <span>Save to Playlist</span>
      </div>
      <div className="flex items-center gap-2 hover:bg-slate-100 hover:bg-opacity-30 cursor-pointer  px-2 py-1">
        <span>
          <ThumbUp className="h-6 w-6" />
        </span>
        <span>Removed from liked</span>
      </div>
    </div>
  );
};
