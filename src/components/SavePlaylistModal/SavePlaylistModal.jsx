import { Close, Add, LibraryAdd } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth-context";
import { useVideo } from "../../context/video-context";
import {
  getAllPlaylistService,
  addNewPlaylistService,
  addVideoToPlatlistService,
  removeVideoFromPlaylistService,
} from "../../services";

import ReactDOM from "react-dom";
export const SavePlaylistModal = ({ setSaveToPlaylistModal, video }) => {
  const [playlistInput, setPlaylistInput] = useState(false);
  const [playlistName, setPlaylistName] = useState("");
  const { token } = useAuth();
  const { videoState, videoDispatch } = useVideo();

  const modalCloseHandler = (e) => {
    e.stopPropagation();
    setSaveToPlaylistModal(false);
  };

  const createNewPlaylistHandler = (e) => {
    setPlaylistInput(true);
  };

  const playlistTextHandler = (e) => {
    setPlaylistName(e.target.value);
  };

  const addNewPlaylistHandler = () => {
    addNewPlaylistService(playlistName, token, videoDispatch);
    setPlaylistInput(false);
    setPlaylistName("");
  };

  const playlistKeyPressHandler = (e) => {
    if (e.key === "Enter" && playlistName) addNewPlaylistHandler();
  };

  const isInPlaylist = (playlist) => {
    return playlist.videos?.find(
      (playlistVideo) => playlistVideo._id === video._id
    );
  };

  const updateVideoInPlaylist = (e, playlist) => {
    if (e.target.checked)
      addVideoToPlatlistService(playlist._id, video, token, videoDispatch);
    else
      removeVideoFromPlaylistService(
        playlist._id,
        video._id,
        token,
        videoDispatch
      );
  };

  useEffect(() => {
    getAllPlaylistService(videoDispatch, token);
  }, [videoDispatch, token]);

  const { playlists } = videoState;

  return ReactDOM.createPortal(
    <>
      <div
        className="fixed inset-0 z-50 bg-slate-400 bg-opacity-40"
        onClick={modalCloseHandler}
      ></div>
      <div className="fixed z-50 top-1/4 left-1/4 md:top-1/2 md:left-1/2 bg-slate-900 text-white py-4 rounded-sm">
        <div className="flex flex-col justify-center gap-5">
          <div className="modal-header flex justify-between px-4">
            <span className="text-lg">Save to</span>
            <span className="cursor-pointer" onClick={modalCloseHandler}>
              <Close className="h-6 w-6" />
            </span>
          </div>
          {playlists.length > 0 &&
            playlists.map((playlist) => (
              <div
                className="flex gap-3 items-center px-4 text-lg"
                key={playlist._id}
              >
                <input
                  type="checkbox"
                  className="accent-sky-400 h-4 w-4"
                  checked={isInPlaylist(playlist)}
                  onChange={(e) => updateVideoInPlaylist(e, playlist)}
                />
                <span>{playlist.title}</span>
              </div>
            ))}
          {playlistInput && (
            <input
              type="text"
              placeholder="Enter playlist name..."
              className="border-b-white bg-transparent outline-none px-4"
              value={playlistName}
              onChange={playlistTextHandler}
              onKeyPress={playlistKeyPressHandler}
            />
          )}
          {playlistName ? (
            <div
              className="flex gap-2 items-center pr-10 cursor-pointer hover:bg-slate-100 hover:bg-opacity-30 py-2 text-sky-400"
              onClick={addNewPlaylistHandler}
            >
              <span className="pl-2">
                <LibraryAdd className="h-6 w-6" />
              </span>
              <span className="uppercase font-bold tracking-wide"> Create</span>
            </div>
          ) : (
            <div
              className="flex gap-1 items-center pr-10 cursor-pointer hover:bg-slate-100 hover:bg-opacity-30 py-2"
              onClick={createNewPlaylistHandler}
            >
              <span className="pl-2">
                <Add className="h-6 w-6" />
              </span>
              <span className=""> Create new playlist</span>
            </div>
          )}
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};
