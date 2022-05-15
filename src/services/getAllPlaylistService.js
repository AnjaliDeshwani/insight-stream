import axios from "axios";
import { ACTION_TYPE } from "../utils/constants";

export const getAllPlaylistService = async (videoDispatch, token) => {
  try {
    const response = await axios.get("/api/user/playlists", {
      headers: { authorization: token },
    });
    videoDispatch({
      type: ACTION_TYPE.ADD_TO_PLAYLISTS,
      payload: { playlist: response.data.playlists },
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
