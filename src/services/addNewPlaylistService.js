import axios from "axios";
import { ACTION_TYPE } from "../utils/";

export const addNewPlaylistService = async (title, token, videoDispatch) => {
  try {
    const response = await axios.post(
      "/api/user/playlists",
      { playlist: { title } },
      { headers: { authorization: token } }
    );
    videoDispatch({
      type: ACTION_TYPE.ADD_TO_PLAYLISTS,
      payload: { playlist: response.data.playlists },
    });
  } catch (error) {
    console.error(error);
  }
};
