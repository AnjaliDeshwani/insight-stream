import axios from "axios";
import { ACTION_TYPE } from "../utils/constants";

export const removeFromWatchLaterService = async (id, token, videoDispatch) => {
  try {
    const response = await axios.delete(`/api/user/watchlater/${id}`, {
      headers: { authorization: token },
    });
    videoDispatch({
      type: ACTION_TYPE.ADD_TO_WATCH_LATER,
      payload: { watchlater: response.data.watchlater },
    });

    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
