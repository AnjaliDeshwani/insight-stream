import axios from "axios";
import { ACTION_TYPE } from "../utils/constants";

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
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
