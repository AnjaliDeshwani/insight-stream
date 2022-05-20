import axios from "axios";
import { ACTION_TYPE, toastHandler } from "../utils/";

export const removeVideoFromPlaylistService = async (
  playlistId,
  videoId,
  token,
  videoDispatch
) => {
  try {
    const response = await axios.delete(
      `/api/user/playlists/${playlistId}/${videoId}`,
      {
        headers: { authorization: token },
      }
    );
    videoDispatch({
      type: ACTION_TYPE.ADD_VIDEO_TO_PLAYLIST,
      payload: { playlistVideos: response.data.playlist },
    });
    toastHandler("warn", "Removed from Playlist");
  } catch (error) {
    toastHandler("error", "Something went wrong");
    console.error(error);
  }
};
