import axios from "axios";
import { ACTION_TYPE } from "../utils/constants";

export const getVideosFromPlaylistService = async (
  playlistId,
  videoDispatch,
  token
) => {
  try {
    const response = await axios.get(`/api/user/playlists/${playlistId}`, {
      headers: { authorization: token },
    });
    videoDispatch({
      type: ACTION_TYPE.ADD_VIDEO_TO_PLAYLIST,
      payload: { playlistVideos: response.data.playlist },
    });
  } catch (error) {
    console.error(error);
  }
};
