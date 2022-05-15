import axios from "axios";
import { ACTION_TYPE } from "../utils/constants";

export const removePlaylistService = async (
  playlistId,
  token,
  videoDispatch
) => {
  try {
    const response = await axios.delete(`/api/user/playlists/${playlistId}`, {
      headers: { authorization: token },
    });
    videoDispatch({
      type: ACTION_TYPE.ADD_TO_PLAYLISTS,
      payload: { playlist: response.data.playlists },
    });
  } catch (error) {
    console.error(error);
  }
};
