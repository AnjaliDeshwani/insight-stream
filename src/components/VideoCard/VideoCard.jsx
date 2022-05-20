import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useOnClickOutsideModal } from "../../hooks/useOnClickOutsideModal";
import { VideoCardModal } from "./VideoCardModal";
import { SavePlaylistModal } from "../index";
import { PlaylistModal } from "../../pages/Playlist/PlaylistModal";

export const VideoCard = ({ video, playlistId, from }) => {
  const navigate = useNavigate();
  const { _id, title, channelName, dateOfUpload } = video;

  const [showModal, setShowModal] = useState(false);
  const [saveToPlaylistModal, setSaveToPlaylistModal] = useState(false);
  const toggleModal = (e) => {
    e.stopPropagation();
    setShowModal((showModal) => !showModal);
  };

  const modalRef = useRef();
  const toggleRef = useRef();
  useOnClickOutsideModal(modalRef, toggleRef, () => setShowModal(false));
  return (
    <div className="relative">
      <div
        className="relative flex flex-col gap-2 w-72 cursor-pointer"
        onClick={() => navigate(`/video/${_id}`)}
      >
        <div>
          <img
            src={`https://i3.ytimg.com/vi/${_id}/maxresdefault.jpg`}
            alt="video-thumbnail"
            className="w-72  h-36 object-cover"
          />
        </div>

        <div className="flex justify-between font-primary">
          <div>{title}</div>
          <div
            ref={toggleRef}
            className="cursor-pointer self-baseline hover:bg-slate-100 hover:bg-opacity-30 hover:rounded-full"
            onClick={toggleModal}
          >
            <MoreVertIcon className="h-6 w-6" />
          </div>
        </div>

        <div className="flex justify-between">
          <div className="text-sm text-slate-700 dark:text-gray-300">
            {channelName}
          </div>
          <div className="text-sm text-slate-700 dark:text-gray-300">
            {dateOfUpload}
          </div>
        </div>
        {showModal &&
          (from === "playlist" ? (
            <PlaylistModal
              modalRef={modalRef}
              setShowModal={setShowModal}
              playlistId={playlistId}
              videoId={_id}
              from={from}
            />
          ) : (
            <VideoCardModal
              modalRef={modalRef}
              video={video}
              setShowModal={setShowModal}
              setSaveToPlaylistModal={setSaveToPlaylistModal}
              from={from}
            />
          ))}
      </div>

      {saveToPlaylistModal && (
        <SavePlaylistModal
          setSaveToPlaylistModal={setSaveToPlaylistModal}
          video={video}
        />
      )}
    </div>
  );
};
