import { MoreVert, PlaylistPlay } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { useOnClickOutsideModal } from "../../hooks/useOnClickOutsideModal";
import { PlaylistModal } from "./PlaylistModal";

export const PlaylistCard = ({ playlist }) => {
  const navigate = useNavigate();
  const { _id, title, videos } = playlist;

  const openPlaylistHandler = () => {
    navigate(`/playlist/${_id}`);
  };

  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef();
  const toggleRef = useRef();
  const toggleModal = (e) => {
    setShowModal((showModal) => !showModal);
  };
  useOnClickOutsideModal(modalRef, toggleRef, () => setShowModal(false));
  return (
    <div className="relative flex flex-col w-72 gap-4">
      <div className="cursor-pointer">
        {videos.length > 0 ? (
          <div onClick={openPlaylistHandler}>
            <img
              className="w-72  h-40"
              src={`https://i3.ytimg.com/vi/${videos[0]._id}/maxresdefault.jpg`}
              alt="playlist"
            ></img>
            <div className="absolute top-0 right-0 h-40 w-28 bg-slate-900 bg-opacity-50 flex flex-col items-center justify-center">
              <span>{videos.length}</span>
              <PlaylistPlay className="h-8 w-8" />
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center bg-gradient-to-r from-sky-400 to-cyan-300 w-72 h-40">
            <h2 className="text-slate-900 text-xl font-bold">No Videos</h2>
          </div>
        )}
      </div>
      <div className="flex justify-between font-primary">
        <div>{title}</div>
        <div
          className="cursor-pointer self-baseline hover:bg-slate-100 hover:bg-opacity-30 hover:rounded-full"
          ref={toggleRef}
          onClick={toggleModal}
        >
          <MoreVert className="h-6 w-6" />
        </div>
      </div>
      {showModal && (
        <PlaylistModal
          modalRef={modalRef}
          setShowModal={setShowModal}
          playlistId={_id}
        />
      )}
    </div>
  );
};
