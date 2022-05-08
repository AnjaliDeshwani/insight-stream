import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState, useRef } from "react";
import { useOnClickOutsideModal } from "../../hooks/useOnClickOutsideModal";
import { VideoCardModal } from "./VideoCardModal";

export const VideoCard = ({ video }) => {
  const { _id, title, channelName, dateOfUpload } = video;

  const [showModal, setShowModal] = useState(false);
  const toggleModal = (e) => {
    e.stopPropagation();
    setShowModal((showModal) => !showModal);
  };

  const modalRef = useRef();
  useOnClickOutsideModal(modalRef, () => setShowModal(false));
  return (
    <div className="relative flex flex-col gap-2 w-72">
      <div className="">
        <img
          src={`https://i3.ytimg.com/vi/${_id}/maxresdefault.jpg`}
          alt="video-thumbnail"
          className="w-72  h-36 object-cover"
        />
      </div>
      <div className="flex justify-between">
        <div>{title}</div>
        <div
          className="cursor-pointer hover:bg-slate-100 hover:bg-opacity-30 hover:rounded-full"
          onClick={toggleModal}
        >
          <MoreVertIcon className="h-6 w-6" />
        </div>
      </div>
      <div className="flex justify-between">
        <div>Channel Name</div>
        <div>Date</div>
      </div>
      {showModal && <VideoCardModal modalRef={modalRef} />}
    </div>
  );
};
