import axios from "axios";
import { ACTION_TYPE } from "../utils/constants";

export const addVideoToPlatlistService = async (
  playlistId,
  video,
  token,
  videoDispatch
) => {
  try {
    const response = await axios.post(
      `/api/user/playlists/${playlistId}`,
      { video },
      { headers: { authorization: token } }
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
